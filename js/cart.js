var vm = new Vue({
	el:"#app",
	data:{
		totalMoney:0,
		productList:[]
	},
	filters:{

	},
	mounted:function(){//页面加载之后自动调用，常用于页面渲染
		this.cartView();
	},
	methods:{
		cartView:function(){
			var _this = this;
			this.$http.get("data/cartData.json").then(function(res){
				_this.productList = res.data.result.list;
				_this.totalMoney = res.data.result.totalMoney;
			});
		}
	}
});