export default ({app: {router}, store}) => {
    /* 每次路由变更时进行pv统计 */
    router.afterEach((to, from) => {
      /* 告诉增加一个PV */
      try {
        var hmtScript = document.getElementById('baidu_tj');
        hmtScript && hmtScript.remove();
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.id = 'baidu_tj';
        hm.src = "https://hm.baidu.com/hm.js?34b4e68c3f35f93fd408bc4074149c18";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
      } catch (e) {
      }
    })
  }
  