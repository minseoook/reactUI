import { useEffect, useState } from "react";

function useDebounce(paramValue) {
  const [debounceValue, setDebounceValue] = useState(paramValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(paramValue);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [paramValue]);

  return debounceValue;
}

export default useDebounce;

// 디바운스훅만들기
// 서치파람스가 바뀔때마다 디바운스훅이 실행된다
// 첫 렌더링때는 빈 서치파람스를 받고
// 유즈이펙트가 실행되고 빈 값을 반환한다
// 그럼 전체리스트가 페치되고
// 검색어가 바뀌면 디운스훅이 계속 리렌더되는데
// 유즈이펙트의 뎁스에 검색어를 걸어두고
// 바뀔때마다 재실행되게 해서 셋타임아웃을 계속 돌린다
// 그럼 검색어 입력이 끝나면 마지막 셋타임아웃이 돌고 거기서
// 셋함수가 실행이 되어 상태가 바뀐다
// 그럼 바뀐 상태가 리턴이 되고
// 그럼 메인페이지에서 상태가 바뀧때마다 페치를 할 유즈이펙트를 만든다
