import homeController from "./controllers/home-controllers.js";
import formController from "./controllers/form-controllers.js"
import eventController from "./controllers/agenda-controller.js"
//module to be exported
let router;

router = {
    //possible has routings
    routes: {
        home: {
            hash: '#home',
            controller: homeController
        },
        form: {
            hash: '#form',
            controller : formController
        },
        event: {
            hash: '#event',
            controller : eventController
        }
    },

    start: () => {
        router.routes.home.controller.init();
        $(window).on('hashchange', () => {
            try {
                router.getRoute(router.routes);
            }
            catch (err) {
                window.location.hash = '#home'
                router.routes.home.controller.init();
            }
        })
    },

    getRoute: (routes) => {
        var obj = Object.values(routes).find((route) => route.hash === window.location.hash);
        //If the current hash is not in our routes, then we default to home view
        obj = obj === undefined ? router.routes.home : obj;
        window.location.hash = obj.hash;
        obj.controller.init();
    }
}

export default router;