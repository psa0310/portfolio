var hostIndex = location.href.indexOf( location.host ) + location.host.length;
if(location.href.indexOf("index.go.kr") == -1){ /*DNS 적용*/
	var contextPath = location.href.substring(hostIndex, location.href.indexOf("/", hostIndex +1) );	
}else{ // 운영서버 DNS 적용전
	var contextPath ='https://www.index.go.kr';
}


/*검색어 입력 이벤트
 * 검색 전 검색어가 2자 이상
 * 특수문자 사용 여부 체크
 */
function fn_search(){
	var searchKeyword = $("#searchKeyword").val().trim();
	var specialPattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	
	if(searchKeyword.length == 0) {
		alert("검색어를 입력해주세요.");
		$("#searchKeyword").val('');
	} else if(searchKeyword.length == 1) {
		alert("검색어를 두자 이상 입력하세요.");
		$("#searchKeyword").val('');
	} else if(specialPattern.test(searchKeyword) == true) {
		alert("특수 문자는 사용할 수 없습니다.");
		$("#searchKeyword").val('');
	} else{
		document.searchForm.sortValue.value = "RANK";
	 	document.searchForm.subSearch.value = searchKeyword;
	 	document.searchForm.firstPage.value = "1";
	    document.searchForm.submit();
	    return false;
	}
}

//지표상세보기
function fn_indexInfo1(idxCd){
	
	let cdNo = "2";
	if($("input[name=clasCd]").val() == "2"){
		cdNo ='210';
	}else if($("input[name=clasCd]").val() == "8"){
		cdNo ='210';
	}else if($("input[name=clasCd]").val() == "10"){
		cdNo= '210';
	}
	
	if(location.href.indexOf("index.go.kr") == -1){ /*DNS 적용*/
		if(contextPath.indexOf("/unity") == -1){ /*unity 적용*/
			var url = contextPath+"/unity/potal/indicator/IndexInfo.do?idxCd="+idxCd;	
		}else{
			var url = contextPath+"/potal/indicator/IndexInfo.do?idxCd="+idxCd;
		}
	}else{	/*서버 Test IP 주소*/ 
		var url = "https://www.index.go.kr/unity/potal/indicator/IndexInfo.do?idxCd="+idxCd;
	}
		
	window.open(url);
}

//지표상세보기, 국가지표체계 상태값 유지를 위해서 인수 추가
function fn_indexInfo(idxCd, upCd){	
	let cdNo = "2";
	if($("input[name=clasCd]").val() == "2"){
		cdNo ='260';
	}else if($("input[name=clasCd]").val() == "8"){
		cdNo ='260';
	}else if($("input[name=clasCd]").val() == "10"){
		cdNo= '260';
	}else if($("input[name=clasCd]").val() == "12"){
		cdNo= '260';
	}
	
	if(location.href.indexOf("index.go.kr") == -1){ /*DNS 적용*/
		if(contextPath.indexOf("/unity") == -1){ /*unity 적용*/
			var url = contextPath+"/unity/potal/indicator/IndexInfo.do?cdNo="+cdNo+"&clasCd="+$("input[name=clasCd]").val()+"&idxCd="+idxCd;		
		}else{
			var url = contextPath+"/potal/indicator/IndexInfo.do?cdNo="+cdNo+"&clasCd="+$("input[name=clasCd]").val()+"&idxCd="+idxCd;	
		}
	}else{	/*서버 Test IP 주소*/ 
		 var url = "https://www.index.go.kr/unity/potal/indicator/IndexInfo.do?cdNo="+cdNo+"&clasCd="+$("input[name=clasCd]").val()+"&idxCd="+idxCd;		
	}
	window.open(url);
	//location.href = url;
}

//마우스 이벤트(mouseover)
function fn_mouseover(th){
	$(th).addClass('on');
}

//마우스 이벤트(mouseout)
function fn_mouseout(th){
	$(th).removeClass('on');
}

/*엔터 이벤트*/
function fn_keySubmit() {
	if(event.keyCode == 13) {
		fn_search();
    }
}

/*모바일 버전 영역 클릭 이벤트*/
function fn_m_Click(){
	if($("#m_id ul").css("display") == "block"){
		$("#m_id ul").css("display", "none");
	}else{
		$("#m_id ul").css("display", "block");
	}
	
}