/**
 * Stores 'sensible default' properties to be applied to instances created by
 * the New function.
 */
interface Module {
    ScreenGui: {
		ResetOnSpawn: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Sibling
	},

	BillboardGui: {
		ResetOnSpawn: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Sibling,
		Active: true
	},

	SurfaceGui: {
		ResetOnSpawn: false,
		ZIndexBehavior: Enum.ZIndexBehavior.Sibling,

		SizingMode: Enum.SurfaceGuiSizingMode.PixelsPerStud,
		PixelsPerStud: number
	},

	Frame: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number
	},

	ScrollingFrame: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number,

		ScrollBarImageColor3: Color3
	},

	TextLabel: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number,

		Font: Enum.Font,
		Text: string,
		TextColor3: Color3,
		TextSize: number
	},

	TextButton: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number,

		AutoButtonColor: false,

		Font: Enum.Font,
		Text: string,
		TextColor3: Color3,
		TextSize: number
	},

	TextBox: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number,

		ClearTextOnFocus: false,

		Font: Enum.Font,
		Text: string,
		TextColor3: Color3,
		TextSize: number
	},

	ImageLabel: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number
	},

	ImageButton: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number,

		AutoButtonColor: false
	},

	ViewportFrame: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number
	},

	VideoFrame: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number
	},
	
	CanvasGroup: {
		BackgroundColor3: Color3,
		BorderColor3: Color3,
		BorderSizePixel: number
	},

	SpawnLocation: {
		Duration: number
	},

	BoxHandleAdornment: {
		ZIndex: number
	},
	ConeHandleAdornment: {
		ZIndex: number
	},
	CylinderHandleAdornment: {
		ZIndex: number
	},
	ImageHandleAdornment: {
		ZIndex: number
	},
	LineHandleAdornment: {
		ZIndex: number
	},
	SphereHandleAdornment: {
		ZIndex: number
	},
	WireframeHandleAdornment: {
		ZIndex: number
	},
	
	Part: {
		Anchored: true,
		Size: Vector3,
		FrontSurface: Enum.SurfaceType,
		BackSurface: Enum.SurfaceType,
		LeftSurface: Enum.SurfaceType,
		RightSurface: Enum.SurfaceType,
		TopSurface: Enum.SurfaceType,
		BottomSurface: Enum.SurfaceType,
	},
	
	TrussPart: {
		Anchored: true,
		Size: Vector3,
		FrontSurface: Enum.SurfaceType,
		BackSurface: Enum.SurfaceType,
		LeftSurface: Enum.SurfaceType,
		RightSurface: Enum.SurfaceType,
		TopSurface: Enum.SurfaceType,
		BottomSurface: Enum.SurfaceType,
	},

	MeshPart: {
		Anchored: true,
		Size: Vector3,
		FrontSurface: Enum.SurfaceType,
		BackSurface: Enum.SurfaceType,
		LeftSurface: Enum.SurfaceType,
		RightSurface: Enum.SurfaceType,
		TopSurface: Enum.SurfaceType,
		BottomSurface: Enum.SurfaceType,
	},

	CornerWedgePart: {
		Anchored: true,
		Size: Vector3,
		FrontSurface: Enum.SurfaceType,
		BackSurface: Enum.SurfaceType,
		LeftSurface: Enum.SurfaceType,
		RightSurface: Enum.SurfaceType,
		TopSurface: Enum.SurfaceType,
		BottomSurface: Enum.SurfaceType,
	},

	VehicleSeat: {
		Anchored: true,
		Size: Vector3,
		FrontSurface: Enum.SurfaceType,
		BackSurface: Enum.SurfaceType,
		LeftSurface: Enum.SurfaceType,
		RightSurface: Enum.SurfaceType,
		TopSurface: Enum.SurfaceType,
		BottomSurface: Enum.SurfaceType,
	},
}

export = Module;