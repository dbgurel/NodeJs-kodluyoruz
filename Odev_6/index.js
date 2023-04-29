const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
  if (ctx.path==='/') {
        ctx.body = `Index Sayfasına Hoşgeldiniz`;
  }
    else if (ctx.path==='/hakkimda') {
        ctx.body = 'Hakkımda Sayfasına Hoşgeldiniz'
    }
    else if (ctx.path==='/iletisim') {
        ctx.body = 'İletişim Sayfasına Hoşgeldiniz'
    }
    else {
        ctx.body = '404 Sayfa Bulunamadı'
    }
});
const port = 3000;
app.listen(port,()=>{
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
