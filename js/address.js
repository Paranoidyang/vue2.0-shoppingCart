new Vue({
	el: '.container',
	data: {
		limitNum:3,
		addressList: []
	},
	mounted: function() {
		this.$nextTick(function() {
			this.getAddressList();
		});
	},
	computed:{
		filterAddress:function(){
			return this.addressList.slice(0,this.limitNum);
		}
	},
	methods: {
		getAddressList: function() {
			var _this = this;
			this.$http.get("data/address.json").then(function(response) {
				var res = response.data;
				if (res.status == "0") {
					_this.addressList = res.result;

				}
			});
		},
		loadMore:function(){
			this.limitNum = this.addressList.length;
		}
	}
});