/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppForm {
    }
    interface AppRoot {
    }
    interface AppTodo {
    }
}
declare global {
    interface HTMLAppFormElement extends Components.AppForm, HTMLStencilElement {
    }
    var HTMLAppFormElement: {
        prototype: HTMLAppFormElement;
        new (): HTMLAppFormElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTodoElement extends Components.AppTodo, HTMLStencilElement {
    }
    var HTMLAppTodoElement: {
        prototype: HTMLAppTodoElement;
        new (): HTMLAppTodoElement;
    };
    interface HTMLElementTagNameMap {
        "app-form": HTMLAppFormElement;
        "app-root": HTMLAppRootElement;
        "app-todo": HTMLAppTodoElement;
    }
}
declare namespace LocalJSX {
    interface AppForm {
        "onAddTask"?: (event: CustomEvent<any>) => void;
    }
    interface AppRoot {
    }
    interface AppTodo {
    }
    interface IntrinsicElements {
        "app-form": AppForm;
        "app-root": AppRoot;
        "app-todo": AppTodo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-form": LocalJSX.AppForm & JSXBase.HTMLAttributes<HTMLAppFormElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-todo": LocalJSX.AppTodo & JSXBase.HTMLAttributes<HTMLAppTodoElement>;
        }
    }
}