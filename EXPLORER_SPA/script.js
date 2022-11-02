import { Router } from "./routes.js";
const router= new Router
router.add("/","/home.html")
router.add("/explorer","/explorer.html")
router.add("/universe","/universe.html")

router.handle()
window.onpopstate=()=>router.handle()
window.route=()=>router.route()