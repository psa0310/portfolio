/************************************************************************
/ * 파일명      : script.js
 * 설명        : 국가지표 통합서브
 * 작성자      : 박승연
 * 작성일      : 2021.10.12
************************************************************************/

$(function(){ 
    // 사이드메뉴 클릭시 바닥 고정
	/*$('input[id=menuicon]:checkbox').click(function() {
		if($('input[id=menuicon]:checkbox').is(':checked')){ 
			$('body').css('overflow','hidden'); 
		} else { 
			$('body').css('overflow','visible'); 
		} 
    });*/
    
    // 사이드메뉴 아코디언
    /*$('.side_menu .body>ul>li>a').click(function(){
        $(this).next().stop().slideToggle();
        $('.side_menu .body>ul>li>a').not(this).next().slideUp();
        return false;
    });*/
    
	// 지표 서비스 토글버튼
	$('.inner_box .right_tit a.toggle').click(function(){
		$('.inner_box .right_tit a.toggle').toggleClass('on');
		if($('.inner_box .right_tit a.toggle').hasClass("on")){
			$(".sub_box div.sub_conts").hide();
		}else{
			$(".sub_box div.sub_conts").show();
		}
		return false;
	});
	
	// Scroll to top
	var scrollToTop = function() {
		var link = $('.top_btn');
		var windowW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

		$(window).scroll(function() {
		//	if (($(this).scrollTop() > 150) && (windowW > 1000)) {
			if ($(this).scrollTop() > 150) {//240910 YP edit
				link.fadeIn(100);
			} else {
				link.fadeOut(100);
			}
		});
		
		link.click(function() {
			$('html, body').animate({scrollTop: 0}, 400);
			return false;
		});
	};
	scrollToTop();
	
	//지표서비스 모달팝업 (211126)
	/*$('.inner_box .pageTitle span.register').click(function(){
		$('.myIndex_popup').css('display','block');
	});*/

	$('.myIndex_popup .popCont .close').click(function(){
		$('.myIndex_popup').css('display','none');
	});

	$('.myIndex_popup .popCont .popBtm .group_btn a.cancel').click(function(){
		$('.myIndex_popup').css('display','none');
	});

	$('.myIndex_popup .popCont .popBtm .group_btn a.add').click(function(){
		$('.myIndex_popup .popCont .popBtm .group_btn .group_add').css('display','block');
	});

	$('.myIndex_popup .popCont .popBtm .group_btn .group_add a.return').click(function(){
		$('.myIndex_popup .popCont .popBtm .group_btn .group_add').css('display','none');
	});
	
	// 지표서비스 필터버튼 토글 스크립트 - 220622 SY
	/*$('.filter_btn a').click(function(){
		if($(this).hasClass('off')) {
			$(this).addClass('on').removeClass('off');
			$('.sub_box .sub_title .period_select').addClass('down');
			
		} else {
			$(this).addClass('off').removeClass('on');
			$('.sub_box .sub_title .period_select').removeClass('down');
    	}
		return false;
	});*/
	
	// *YP 230829 
	$('.sub_title .filter_btn a').click(function(){
        $(this).parent().next('.period_select').slideToggle();
        return false;
    });
	
	$( window ).resize(function() {
		$('.filter_btn a').addClass('off').removeClass('on');
		$('.sub_box .sub_title .period_select').removeClass('down');
	}).resize();
});//ready(function()


// *YP 240910 
$(document).ready(function(){
		
	// gnb
	$('#header .gnb .gnb_wrap li').mouseover(function(){
		$(this).addClass('on');
		$('#header .gnb').addClass('on');
		$('#header .nav_bg').addClass('dis_block');
	});
	$('#header .gnb .gnb_wrap li').mouseleave(function(){
		$(this).removeClass('on');
		$('#header .nav_bg').removeClass('dis_block');
		$('#header .gnb').removeClass('on');
	});
	$('#header .gnb .gnb_wrap > ul > li > a').focus(function(){
		$('#header .gnb').addClass('on');
		$('#header .nav_bg').addClass('dis_block');
	});
	$('#header .gnb .gnb_wrap li:last-child > ul > li:last-child > a').blur(function(){
		$('#header .gnb').removeClass('on');
		$('#header .nav_bg').removeClass('dis_block');
	});


	// 사이트맵
	$("#sitemap_open").on("click", function(){
		
		$('body').addClass('over_h');
		$(this).next('.sideBg').fadeIn(100);
		$(".sideBg .side_menu").animate({"right":"0"},400);
		
		$(window).resize(function(){ 
			if (window.innerWidth > 1080){
				$('body').removeClass('over_h');
				$('.sideBg').fadeOut(200);
			}
			return false;
		}).resize();
	});
	$('.side_menu .body>ul>li>a').on('click', function(){
		$(this).parent('li').toggleClass('on').siblings().removeClass('on');
		$(this).next('ul').slideToggle();
		$('.side_menu .body>ul>li>a').not(this).next().slideUp();
	});
	$('#sitemap_close').click(function(){
		$('body').removeClass('over_h');
		$(".sideBg .side_menu").animate({"right":"-100%"},400);
		$(this).parents('.sideBg').fadeOut(200);
	});


	// 푸터 기관목록
	$('.f_site_wrap .f_site .tog_btn').click(function(){
		$(this).toggleClass('clicked');
		$(this).next('ul').slideToggle();
	});


	// mobile search
	$(".btn_mo_search").on("click", function(){
		$('body').addClass('over_h');
		$(this).next('.search_box').addClass("open");
		
		$(".main_search .btn_close").click(function(){
			$('body').removeClass('over_h');
			$(".search_box").removeClass("open");
		});
		
		$(window).resize(function(){ 
			if (window.innerWidth > 980){
				$('body').removeClass('over_h');
				$(".search_box").removeClass("open");
				return false;
			}
		}).resize();
	});


	//top icon 변경
	$(".top_btn .xi-angle-up").attr("class","xi-arrow-top");
	$(window).resize(function() {
		if(window.innerWidth < 980) {
			$(".top_btn i").addClass("dis_n");
			$('.top_btn span').removeClass('txt_blind');
		} else {
			$(".top_btn i").removeClass("dis_n");
			$('.top_btn span').addClass('txt_blind');
		}
	});

	// 메인 게시판 탭
	$('.m_board .m_bd .btn_tab').on('click', function(){
		$(this).parents('.m_bd').addClass('on').siblings().removeClass('on');
	});

	
});

// 240910 YP main indicator
$(document).ready(function(){

	/*************************************************
		indicator
	*************************************************/
	
	// depth1 btn
	$('.indicator_wrap .depth1 .btn').on('click', function(){
		$(this).parents('.ltem').addClass('on').siblings().removeClass('on');
	});
		
	
	// mobile search
	$(".indicator_wrap .depth1 .btn").click(function(){
		$(this).parent('.ltem').addClass('on').siblings().removeClass('on');
		
		$(window).on('resize', function(){
			$('.indicator_wrap .depth1').removeClass("dis_n");
			$('#inner_wrap_mo, #indicator_colse').removeClass("dis_block");
			
			if (window.innerWidth <= 600){
				$('.indicator_wrap .depth1').addClass("dis_n");
				$('#inner_wrap_mo, #indicator_colse').addClass("dis_block");
		
				$("#indicator_colse").click(function(){
					$('.indicator_wrap .depth1').removeClass("dis_n");
					$('#inner_wrap_mo, #indicator_colse').removeClass("dis_block");
				});
			}
			return false;
		}).resize();

	});
	
	
	
	$("#indicator_colse").click(function(){
		$('.indicator_wrap .depth1').removeClass("dis_n");
		$('#inner_wrap_mo').removeClass("dis_block");
		$(this).removeClass("dis_block");
	});

	var ww = $(window).width();
	var main_swiper = undefined;//호출되지 않을때

	function fn_indicator_subCate_swiper() {

		main_swiper = new Swiper("#indicator_subCate_swiper", {
			loop: true,					// 반복 여부
			slidesPerView: "auto",
			spaceBetween: 20,			// 아이템 간격
			slideToClickedSlide: true,	// 해당 슬라이드 클릭시 슬라이드 위치로 이동
			simulateTouch: true,
			navigation: {
				nextEl: '.controls .btn_next',
				prevEl: '.controls .btn_prev',
			},
			a11y: { // 웹접근성 
				enabled: true,
				prevSlideMessage: '이전 카테고리',
				nextSlideMessage: '다음 카테고리',
				slideLabelMessage: '목록 총 {{slidesLength}}장의 슬라이드 중 {{index}}번 슬라이드 입니다.',
//				paginationBulletMessage: '{{index}}번째 슬라이드 가기',
			}
		});

		if (980 >= ww >= 601 && main_swiper != undefined) {
			//console.log('fn_indicator_subCate_swiper 작은 크기인경우 확인');
			main_swiper.destroy();
			main_swiper = undefined;
		}
	}

	//main indicator swiper
	var isIndicator = document.querySelector('.indicator_subCate_swiper');
	if(isIndicator !== null){
		fn_indicator_subCate_swiper();
	}

	$(window).on('resize', function () {
		ww = $(window).width();
		if(isIndicator !== null){
			fn_indicator_subCate_swiper();
		}
	});


});


//241007 YP 전제지표 탭
$(document).ready(function () {
	
	$('.snb').addClass('pc');
	
	$( window ).resize(function() {
		var width=window.innerWidth;

		if (width < 980){
			$(document).on('click', '.snb .btn_menu_select', function() {
				var menu_select_ul = $('.snb ul');
						
				if(menu_select_ul.is(":visible") ){
					menu_select_ul.removeClass('open');
					$(this).removeClass('on').attr('title','펼치기');
				}else{
					$('.snb').removeClass('pc');
					menu_select_ul.addClass('open');
					$(this).addClass('on').attr('title','접기');
					
					$('.snb ul li a').on("click",function(){
						var snb_item = $('.snb ul li a');
						var text = $(this).html();
						
						if($(".snb ul").css("display") == "block"){
							$(this).addClass('on').attr('title','선택됨');
							snb_item.not($(this)).removeClass('on').attr('title','');
							$(".snb .btn_menu_select .title").html(text);
							$(".snb .btn_menu_select").removeClass('on').attr('title','펼치기');
							menu_select_ul.removeClass('open');
						}
					});
				}
			});return false;
		}
		else if(width > 981){
			$('.snb ul li a.on').attr('title','선택됨');
			$('.snb').addClass('pc');
		}
		
	}).resize();
	
	// 목록 focus
	$('.box_list_area .box_list a.tit').focus(function(){
		$(this).parents('div.box_list').addClass('on').siblings().removeClass('on');
	});
	
	
	$('.box_list_area > .box_list:last-of-type a.tit').blur(function(){
		$('.box_list_area .box_list').removeClass('on');
	});
	
	
});

/**
 * @todo script 공통으로 파일 분리하기 / 지표체계 공통으로 사용할 수 있게 하기
 * @param depth 뷴류값 구분(상위인지)
 * @param idxSysCd 뷴류값 코드
 */
function fn_onClickCategory(depth, idxSysCd){

	//@todo 공통 양식에 맞춰서 별도 form 생성하기
	var divide1 = document.querySelector('input[name=divide1]').value;
	var dataFrom = JSON.parse('{"depth":'+depth+',"idxSysCd":'+idxSysCd+',"idxClasCd":'+divide1+'}');

	$.ajax({
		type:"POST",
		url : '/unity/potal/indicator/getIdxSysCdData.do',
		data: dataFrom,
		dataType:"json",
		async:false,
		success:function(data){

			var categoryList = data.categoryList;

			if(categoryList == null || categoryList == undefined) return;//@todo 값 확인 후 예외처리 하기

			if(divide1 == '2' || divide1 == '10' || divide1 == '12') {
				//지표체계분류 만들기(2depth)
				fn_makeSysEle(categoryList);

				//지표목록 만들기(3depth)
				fn_makeIdxEle(categoryList);

				//초기화
				//2depth style 지우기
				const depth2over = document.querySelector('.depth2_overH');
				if(depth2over != null || depth2over != undefined){
					depth2over.removeAttribute('style');
				}
				//스크롤 내려간 상태로 다른 탭 생성 시 스크롤이 아래에 고정되어 있어서 새로 만들면 위로 이동
				$('.national_wrap .depth3 .inner, .social_wrap .depth3 .inner', '.lowBirth_wrap .depth3 .inner').scrollTop(0);
			}else {
				//지표목록 만들기(3depth)
				fn_makeIdxEle(categoryList);
			}

		},
		error:function(request, status, error){
			alert(request.status + " / " + status + " / " + error +  " 처리도중 에러가 발생해였습니다.");
		}
	})

}

//지표체계분류 만들기(2depth)
function fn_makeSysEle(data){

	//초기화
	var lisEle = '';//지표체계분류목록
	$('#mainCateCon_1 .depth2 ul').children().remove();

	for(var i=0;i<data.length;i++){

		var index = i+1;
		var isSysCd;
		var upSysCd = data[i].upSysCd;
		var idxSysCd = data[i].idxSysCd;
		var idxSysKornm = data[i].idxSysKornm;
		var subCate = data[i].subCate;

		if(isSysCd == idxSysCd) continue;

		isSysCd = idxSysCd;
		//지표체계분류목록
		lisEle+='<li class="swiper-slide">';
		lisEle+=	'<button type="button" id="subCate'+upSysCd+'_'+index+'" role="tab" aria-selected="true" aria-controls="subCate'+upSysCd+'_con'+index+'" class="btn btn_subCate"';
		lisEle+=			'data-idx-sys-cd="'+idxSysCd+'" onclick=moveTo3depthView(this.id,'+upSysCd+','+subCate+')>';
		lisEle+=		'<span>'+idxSysKornm+'</span>';
		lisEle+=	'</button>';
		lisEle+='</li>';

	}

	$('#mainCateCon_1 .depth2 ul').append(lisEle);
	$('#mainCateCon_1 .depth2 ul li:first').addClass('on');

}

//@todo 미사용 변수 제거와 최적화 필요
function fn_makeIdxEle(data){

	//초기화
	var list = [];
	var cnt = 1;//카테고리별 개수
	var isSysCd;//분류체계 같은지 확인
	var divsEle = '';//지표목록1
	$('#mainCateCon_1 .depth3 div.inner').children().remove();
	
	//필요한 데이터로 재가공
	for(var i=0;i<data.length;i++){

		var divData = {};
		var idxSysCd = data[i].idxSysCd;

		divData['index'] = i+1;
		divData['upSysCd'] = data[i].upSysCd;
		divData['idxSysCd'] = idxSysCd;
		divData['idxSysKornm'] = data[i].idxSysKornm;
		divData['idxKornm'] = data[i].idxKornm;
		divData['descDt'] = data[i].descDt;
		divData['descDt1'] = data[i].lastDescDt;
		divData['nmbrVal'] = data[i].nmbrVal;
		divData['nmbrVal1'] = data[i].lastNmbrVal;
		divData['unit'] = data[i].unit == null ? '' : data[i].unit;
		divData['subCate'] = data[i].subCate;
		divData['cnt'] = data[i].cnt;
		divData['idxCd'] = data[i].idxCd;
		divData['sttsDataSrcNm'] = data[i].sttsDataSrcNm;
		divData['idxClasCd'] = data[i].idxClasCd;
		divData['trend'] = data[i].trend;
		divData['segNum'] = data[i].segNum;
		

		list.push(divData);
	}

	for(var i=0;i<list.length;i++){

		const upSysCd = list[i].upSysCd;
		const idxSysCd = list[i].idxSysCd;
		const subCate = list[i].subCate;

		list[i].subCate = 'subCate'+upSysCd+'_con'+subCate;	//li 목록 들어갈 위치

		if(isSysCd == idxSysCd) continue;

		//지표목록
		divsEle+='<div id="subCate'+upSysCd+'_con'+subCate+'" role="tabpanel" aria-labelledby="subCate'+upSysCd+'_'+subCate+'" class="list_con">';
		divsEle+=	'<ul>';
		divsEle+=	'</ul>';
		divsEle+='</div>';

		isSysCd = idxSysCd;

	}

	$('#mainCateCon_1 .depth3 div.inner').append(divsEle);

	let isSubCate;

	for(var i=0;i<list.length;i++){

		var idxClasCd = list[i].idxClasCd;
		var subCate = list[i].subCate;
		var idxSysCd = list[i].idxSysCd;
		var upSysCd = list[i].upSysCd;
		let divsLisEle = '';

		if(isSubCate != subCate){
			isSubCate = subCate;
			divsLisEle+=		'<span id="subCate_tit'+subCate+'">'+list[i].idxSysKornm+'('+list[i].cnt+')</span>';//지표체계분류별 첫번째만 표기
		}

		divsLisEle+=		'<li onclick="fn_indexInfo(\''+list[i].idxCd+'\','+upSysCd+');" style="cursor:pointer;">';
		divsLisEle+=			'<div class="left">';
		if(idxClasCd == '12' && list[i].segNum == '1') {//저출생통계지표 대표지표
			divsLisEle+=				'<a href="javascript:;" class="title rep">'+list[i].idxKornm+'</a>';
		}else {
			divsLisEle+=				'<a href="javascript:;" class="title">'+list[i].idxKornm+'</a>';
		}
		divsLisEle+=			'</div>';
		if(list[i].idxClasCd != '2' && list[i].idxClasCd != '12') {
			if(list[i].idxClasCd == '8') {
				if(list[i].trend == 'good'){
					divsLisEle+=		'<div class="center life_icon good">';
					divsLisEle+=		'	<em class="txt_blind">전기대비 개선</em><i></i>';
					divsLisEle+=		'</div>';
				}else if(list[i].trend == 'soso') {
					divsLisEle+=		'<div class="center life_icon soso">';
					divsLisEle+=		'	<em class="txt_blind">전기대비 동일</em><i></i>';
					divsLisEle+=		'</div>';
				}else if(list[i].trend == 'bad') {
					divsLisEle+=		'<div class="center life_icon bad">';
					divsLisEle+=		'	<em class="txt_blind">전기대비 악화</em><i></i>';
					divsLisEle+=		'</div>';
				}
			}else {
				divsLisEle+=			'<div class="center source">';
				divsLisEle+=			'	<span class="text"><em>출처 : </em>'+list[i].sttsDataSrcNm +'</span>';
				divsLisEle+=			'</div>';
			}
		}else {
			if(list[i].nmbrVal != '' && list[i].nmbrVal != null && (list[i].descDt != list[i].descDt1)) {
				divsLisEle+=			'<div class="center value_box">';
				divsLisEle+=			'	<span class="year">'+list[i].descDt+'</span>';
				if(list[i].nmbrVal == '상세보기') {
					divsLisEle+=			'	<strong class="value"><span class="num">상세보기 <i class="xi-search"></i></span></strong>';
				}else{
					divsLisEle+=			'	<strong class="value"><span class="num">'+list[i].nmbrVal+'</span></strong>';
				}
				divsLisEle+=			'</div>';
			}
		}
		divsLisEle+=			'<div class="right value_box">';
		divsLisEle+=				'<span class="year">'+list[i].descDt1+'</span>';
		if(list[i].nmbrVal == '상세보기') {
			divsLisEle+=				'<strong class="value"><span class="num">상세보기 <i class="xi-search"></i></span></strong>';
		}else{
			divsLisEle+=				'<strong class="value"><span class="num">'+list[i].nmbrVal1+'</span><em class="unit">'+list[i].unit+'</em></strong>';	
		}		
		divsLisEle+=			'</div>';
		divsLisEle+=		'</li>';

		$('#'+subCate+' ul').append(divsLisEle);

	}
}

//태그를 클릭때마다 만들고 지우기 때문에 이벤트가 지워진다 바인딩 또는 display 고려 필요
//offsetTop 함수는 절대값 좌표 구하는 용도
function moveTo3depthView(id, subCateNum, conNum){

	const eleTopId = 'subCate_titsubCate'+subCateNum+'_con'+conNum;
	const top = document.querySelector('#'+eleTopId).offsetTop-100;//위치값으로 보정 필요

	const displayUl = document.querySelector('ul.depth2_overH');
	const ulWidth = displayUl.clientWidth;
	const lis = displayUl.children;
	let selectSumWidth = 0;
	let translateX = 0;
	let lisWidth = 0;//li가 많은 경우 ul 너비보다 커서 글자 잘리는 경우 방지

	for(let i = 0; i < lis.length; i++){

		const liWidth = lis[i].clientWidth;

		lisWidth += liWidth;//문자 s 하나 차이로 변수명 주의
		if(i === conNum || i === (conNum+1)){//몇 개 이동할지
			translateX += liWidth;
		}else if(i === (conNum-1)){//현재 선택된 값 기준 0~현재까지 너비
			selectSumWidth = lisWidth;
		}

	}

	//마지막 인덱스를 기준으로 고정해야하는 경우 아래 수정해서 사용, li click시 필요한 좌표를 미리 다 계산하고 사용해도 무방
	//translateX = (ulWidth < lisNWidth) ? displayUl.style.transform.match(/-?\d+/) : 0;//맨끝이 잘리는 경우 방지
	if(window.innerWidth >= 601 || window.innerWidth <= 980){//601 <= width <= 980 조건은 디자인이 변경에 따라서 달라지는 조건으로 별도 분기
		translateX = 0;
	}else if(ulWidth >= lisWidth || ulWidth >= selectSumWidth){
		translateX = 0;
	}else if(conNum === lis.length || (lisWidth - ulWidth) > translateX){
		//마지막 인덱스는 좌표 값 고정 계산 || 마지막 인덱스를 기준으로 적은 인덱스의 계산 값 보정
		translateX = ulWidth - lisWidth;
	}else if(ulWidth < lisWidth){
		//translateX * -1
		translateX = -translateX;
	}

	displayUl.style.transform = 'translate('+translateX+'px)';
	//on 이벤트 제거
	$('.btn_subCate').parent().removeClass('on');
	$('#'+id).parent().addClass('on');

	$('.depth3 .inner').animate({scrollTop: top}, 500);

}

//버튼 클릭 시 좌우 이동
//@todo 함수명 앞에 'fn_' 붙이고 사용되는 곳 함수명 수정하기
function moveCategory(type){

	const lis = document.querySelectorAll('li.swiper-slide');
	let btnId;
	let selectedLi = 0;

	for(let i = 0; i < lis.length; i++){
		let isClass = lis[i].classList.contains('on');
		if(isClass){//on인 인덱스 찾기
			selectedLi = i;
		};
	}

	if(type === 'n' && selectedLi < (lis.length - 1)){
		selectedLi++;
	}else if(type === 'p' && selectedLi > 0){
		selectedLi--;
	}else{
		return;
	}

	btnId = '#'+lis[selectedLi].children[0].id
	$(btnId).trigger('click');

}

// 241007 YP 지표서비스
$(document).ready(function () {
	
	// top indicator category
	$('.indicator_nav .btn_menu_select').on('click', function() {
		var thisBtn = $(this);
		var indiNav_btn = $('.indicator_nav .btn_menu_select');
		var indiNav_ul = $(this).closest('li.depth').children('ul');
				
		if(indiNav_ul.is(":visible") ){
			thisBtn.removeClass('on').attr('title','펼치기');
		}else{
			indiNav_btn.not($(this)).removeClass('on').attr('title','펼치기');
			thisBtn.addClass('on').attr('title','접기');
		}
	});
	
	// indicator details tab event
	$(function(){
		var indi_tab = $('.indicator_tab');
		
		//var indi_tabHeight = indi_tab.outerHeight();
		var indi_tabHeight = $('.service_top').outerHeight();
		var indi_detailWrap = $('.indicator_details .sub_box');
		
		var fixScroll = 0;
		$(window).on('scroll', function () {
			var scroll = $(this).scrollTop();
			
			indi_detailWrap.each(function() {
				var top = $(this).offset().top - indi_tabHeight;
				var	bottom = top + $(this).outerHeight();

				if (scroll >= top && scroll <= bottom) {
					indi_tab.find('a').parent('li').removeClass('on');
					indi_detailWrap.removeClass('active');

					$(this).addClass('active');
					indi_tab.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('on');
				}
			});
						
			if (scroll > 250){
				$(".indicator_details").addClass("sticky");
			}
			else {
				$(".indicator_details").removeClass("sticky");
			}
			fixScroll = scroll;
		});
		
		$(".indicator_tab a").on('click', function () {
			var tabThis = $(this);
			var id = tabThis.attr('href');

			$('html, body').animate({
				scrollTop: $(id).offset().top - indi_tabHeight
			}, 100);
			return false;
		});
	});


	
});

// 241008 지표찾기 도움말 btn
$(function(){
	$("#helpBtn").click(function(){
		$("#helpview").toggle();
	});
	$("#helpview").click(function(){
		$("#helpBtn").hide();
	});
	// depth1 지표찾기
	$('.indicators_box .depth1 .btn').on('click', function(){
		$(this).parents('.ltem').addClass('on').siblings().removeClass('on');
	});
	
	// depth2 btn
	$('.indicators_box .depth2 a.title').on('click', function(){
		$(this).parents('.list').addClass('on').siblings().removeClass('on');
	});
});

//241014 YP 지표찾기
$(document).ready(function () {
	
	$(".flw_box .step_box .btn_cate").click(function(){
		$(this).parent('.flw_title').toggleClass('open').next('.inner_wrap').slideToggle();
		
		$(window).on('resize', function(){
			if (window.innerWidth >= 561){
				$('.flw_box .step_box .flw_title').removeClass('open').next('.inner_wrap').css('display','block');
			}
			return false;
		}).resize();
		
	});
});
