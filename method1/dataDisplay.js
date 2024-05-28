// 웹 브라우저에서 INU 버튼 요소를 가져온다.
const inuButton = document.getElementById('inu-button');

// INU 버튼에 클릭 이벤트 리스너를 추가한다.
inuButton.addEventListener('click', fetchData);

// 데이터를 요청하는 함수를 정의한다.
function fetchData() {
  // JSON-SERVER에서 데이터를 가져오는 요청을 보낸다.
  fetch('http://localhost:3000/web')
    .then(response => response.json()) // 응답을 JSON 형태로 파싱한다.
    .then(data => {
      // 가져온 데이터를 localStorage에 저장한다.
      localStorage.setItem('webData', JSON.stringify(data));

      // 저장된 데이터를 화면에 출력한다.
      displayData(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

// 데이터를 화면에 출력하는 함수를 정의한다.
function displayData(data) {
  const outputDiv = document.getElementById('output');

  // 데이터를 화면에 출력한다. 여기서는 간단히 문자열로 출력한다.
  outputDiv.innerText = JSON.stringify(data);
}
