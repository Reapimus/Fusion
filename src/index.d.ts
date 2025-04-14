import {
    Animatable,
	PropertyTable,
	SpecialKey,
	StateObject,
	Task,
	Version,
    Scope,
    ScopedObject,
    GraphObject,
    Use,
    UsedAs
} from "./Types";
import Contextual from "./Utility/Contextual";
import Safe from "./Utility/Safe";
import deriveScope from "./Memory/deriveScope";
import doCleanup from "./Memory/doCleanup";
import scoped from "./Memory/scoped";
import innerScope from "./Memory/innerScope";
import insert from "./Memory/insert";
import Observer from "./Graph/Observer";
import Value from "./State/Value";
import Computed from "./State/Computed";
import ForKeys from "./State/ForKeys";
import ForPairs from "./State/ForPairs";
import ForValues from "./State/ForValues";
import peek from "./State/peek";
import New from "./Instances/New";
import Hydrate from "./Instances/Hydrate";
import Attribute from "./Instances/Attribute";
import AttributeChange from "./Instances/AttributeChange";
import AttributeOut from "./Instances/AttributeOut";
import Child from "./Instances/Child";
import Children from "./Instances/Children";
import Out from "./Instances/Out";
import OnEvent from "./Instances/OnEvent";
import OnChange from "./Instances/OnChange";
import Tween from "./Animation/Tween";
import Spring from "./Animation/Spring";

declare namespace Fusion {
	// General
    export const version: Version;
    export { Contextual, Safe };

    // Memory
    export { deriveScope, doCleanup, innerScope, insert, scoped };

    // Graph
    export { Observer };

    // State
    export { Computed, ForKeys, ForPairs, ForValues, peek, Value };

    // Roblox API
    export {
        Attribute,
        AttributeChange,
        AttributeOut,
        Child,
        Children,
        Hydrate,
        New,
        OnChange,
        OnEvent,
        Out
    }

    // Animation
    export { Tween, Spring };

    // Types
    export {
        Animatable,
        PropertyTable,
        SpecialKey,
        StateObject,
        Task,
        Version,
        Scope,
        ScopedObject,
        GraphObject,
        Use,
        UsedAs,
    };
}

export = Fusion