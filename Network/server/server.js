// koa
// koa-router
// koa-bodyparser
// query-string
// mongoose

// 자동 저장 원하면 nomemon

// postman -> clinet가 없을 때 사용
// get 방식은 상관 ㄴㄴ
// post 방식이 필요


const Koa = require('Koa')
const app = new Koa();
const Router = require('Koa-router')
const router = new Router();
const bodyparser = require('koa-bodyparser')

// todo
//*****************************************************//

router.get('/', (ctx) => {
    console.log('두둥');
    ctx.body = '<h1>두둥</h1>'
})

router.get('/app', (ctx) => {
    console.log('욥!');
    ctx.body = '<h1>욥!</h1>'
})

router.get('/bpp/:name',(ctx)=>{
    console.log('우왕')
    ctx.body = '<h1>우왕</h1>'
})

router.get('/cpp/',(ctx)=>{
    console.log('이얍')

    const {name, age} = ctx.query
    console.log(name, age);
    
    ctx.body = '<h1>이얍</h1>'
})


router.get('/dpp',(ctx)=>{
    console.log('오올')

    const {name, age} = ctx.query
    console.log(ctx.query)
    console.log(name, age);
    
    ctx.body = '<h1>오올</h1>'
})

router.get('/epp/',(ctx)=>{
    console.log('이얍')

    const {name, age} = ctx.query
    console.log(name, age);
    
    ctx.body = '<h1>이얍</h1>'
})


router.get('/fpp/',(ctx)=>{
    console.log('이얍')

    const {name, age} = ctx.query
    console.log(name, age);
    
    ctx.body = '<h1>이얍</h1>'
})

/***********************************************/
// postman
// json 데이터로 전송
// objgen/json -> json으로 만들어줌

// router.post('/app', (ctx) => {
//     console.log('포스트1');

//     const {name, age} =  ctx.request.body;
//     console.log(name, age);
// })


router.post('/gpp', (ctx) => {
    console.log('포스트1');

    const {name, age} =  ctx.request.body;
    console.log(name, age);
    
    ctx.body = '여기에 다시 값을 돌려줘야 error(not found) 가 일어나지 않음'
})



//*****************************************************//

app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods())
app.listen(4000, () => {console.log('listen');})
