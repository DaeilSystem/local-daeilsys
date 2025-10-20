declare module "scrollmagic" {
  export default class ScrollMagic {
    // Controller
    static Controller: new (...args: any[]) => any

    // Scene
    static Scene: new (...args: any[]) => {
      setPin: (el: Element | null) => any
      on: (event: string, cb: (e: any) => void) => any
      addTo: (controller: any) => any
      destroy: () => void
    }
  }
}
