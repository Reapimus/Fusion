import { Players } from "@rbxts/services";
import Fusion, {
	New,
	Children,
	Attribute,
	StateObject,
	Value,
	OnEvent,
	doCleanup,
	ForPairs,
	scoped,
	UsedAs,
	Scope,
} from "@reapimus/fusion";

type PlayerListScope = Scope<
	typeof Fusion & {
		PlayerList: typeof PlayerList;
		PlayerListRow: typeof PlayerListRow;
	}
>;

type PlayerListRowProps = {
	Player: Player;
};

function PlayerListRow(this: PlayerListScope, props: PlayerListRowProps) {
	return this.New("TextLabel")({
		Name: props.Player.DisplayName,

		Size: new UDim2(1, 0, 0, 25),
		BackgroundTransparency: 1,

		Text: props.Player.DisplayName,
		TextColor3: new Color3(1, 1, 1),
		Font: Enum.Font.GothamMedium,
		TextSize: 16,
		TextXAlignment: Enum.TextXAlignment.Right,
		TextTruncate: Enum.TextTruncate.AtEnd,

		[Children]: this.New("UIPadding")({
			PaddingLeft: new UDim(0, 10),
			PaddingRight: new UDim(0, 10),
		}),

		[Attribute("UserId")]: props.Player.UserId,
	});
}

type PlayerListProps = {
	Players: StateObject<Player[]>;
};

function PlayerList(this: PlayerListScope, props: PlayerListProps) {
	return this.New("Frame")({
		Name: "PlayerList",

		Position: UDim2.fromScale(1, 0),
		AnchorPoint: new Vector2(1, 0),
		Size: UDim2.fromOffset(300, 0),
		AutomaticSize: Enum.AutomaticSize.Y,

		BackgroundTransparency: 0.5,
		BackgroundColor3: new Color3(0, 0, 0),

		[Children]: [
			this.New("UICorner")({}),
			this.New("UIListLayout")({
				SortOrder: Enum.SortOrder.Name,
				FillDirection: Enum.FillDirection.Vertical,
			}),

			this.ForValues(props.Players, (_, scope, player) => {
				return this.PlayerListRow({
					Player: player as Player,
				});
			}),
		],
	});
}

const scope = Fusion.scoped({
	PlayerList: PlayerList,
	PlayerListRow: PlayerListRow,
});
const players = scope.Value(Players.GetPlayers());
function updatePlayerSet() {
	players.set(Players.GetPlayers());
}

const playerConnections = [
	Players.PlayerAdded.Connect(updatePlayerSet),
	Players.PlayerRemoving.Connect(updatePlayerSet),
];

const gui = scope.New("ScreenGui")({
	Name: "PlayerList",
	Parent: Players.LocalPlayer.FindFirstChildOfClass("PlayerGui"),

	[OnEvent("AncestryChanged")]: (parent: Instance) => {
		if (!parent) {
			doCleanup(playerConnections);
		}
	},

	[Children]: [
		scope.PlayerList({
			Players: players,
		}),
	],
});
