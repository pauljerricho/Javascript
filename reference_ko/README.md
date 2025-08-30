# 자바스크립트 기초 + 디자인 패턴 레퍼런스 (한국어)

> **목표**: 기존 프로젝트 코드는 *절대 수정하지 않고*, 깃허브에 바로 올릴 수 있는 **참고용** 자료를 제공합니다.  
> 모든 파일과 주석, 설명은 **한국어**로 작성했습니다. Node.js로 바로 실행 가능한 예제 중심입니다.

---

## 구성 개요

- `basics/` — **자바스크립트 기초 30개 주제**
- `patterns/` — **디자인/실무 패턴 40개** *(GoF 23 + JS 특화/실무 패턴 포함)*
- `README.md` — 이 문서 (설치/실행/학습 로드맵/각 파일 링크/추가 참고)

총 **70개 이상의** 짧은 실행 예제를 제공합니다. 각 파일은 독립적으로 `node 파일명.js` 로 실행할 수 있게 구성했습니다.

---

## 사용 방법

### 1) Node.js 설치
- Node 18+ 권장 (LTS).

### 2) 실행
아래 중 하나를 실행합니다.
```bash
node basics/01_variables.js
node patterns/01_singleton.js
```

### 3) 추천 학습 로드맵
1. **언어 기초**(basics) 1~15 → 16~23(런타임/비동기) → 24~30(고급/성능)
2. **패턴**(patterns) 01~23(GoF/구조/행동) → 24~40(행동/실무/인프라)

---

## 목차 (클릭해서 확인)

### 🔹 기초(30)
1. [변수/상수/스코프](basics/01_variables.js)  
2. [원시 타입](basics/02_primitive_types.js)  
3. [Number/BigInt](basics/03_numbers_bigint.js)  
4. [문자열/템플릿 리터럴](basics/04_strings_template.js)  
5. [Boolean/null/undefined/truthy-falsy](basics/05_boolean_null_undefined.js)  
6. [객체 리터럴/속성/동적 키](basics/06_objects.js)  
7. [배열과 고차함수](basics/07_arrays_basic.js)  
8. [함수 선언/표현/화살표 함수](basics/08_functions_arrow.js)  
9. [this 바인딩](basics/09_this_binding.js)  
10. [스코프와 클로저](basics/10_scope_closure.js)  
11. [호이스팅/TDZ](basics/11_hoisting.js)  
12. [전개/구조분해 할당](basics/12_spread_destructuring.js)  
13. [기본/나머지 파라미터](basics/13_params_defaults_rest.js)  
14. [모듈(ESM/CJS) 개념](basics/14_modules_esm_cjs.js)  
15. [클래스/상속](basics/15_classes_inheritance.js)  
16. [프로토타입/체인](basics/16_prototype_chain.js)  
17. [Symbol과 은닉](basics/17_symbols.js)  
18. [이터러블/이터레이터](basics/18_iterable_iterator.js)  
19. [제너레이터](basics/19_generators.js)  
20. [프로미스](basics/20_promises.js)  
21. [async/await](basics/21_async_await.js)  
22. [에러 처리/사용자 에러](basics/22_error_handling.js)  
23. [이벤트 루프/마이크로태스크](basics/23_event_loop_microtask.js)  
24. [Map/Set/WeakMap/WeakSet](basics/24_map_set_weak.js)  
25. [JSON](basics/25_json.js)  
26. [Date/Intl 포매팅](basics/26_date_intl.js)  
27. [정규표현식](basics/27_regexp.js)  
28. [Proxy/Reflect](basics/28_proxy_reflect.js)  
29. [TypedArray/ArrayBuffer](basics/29_typedarray_buffer.js)  
30. [성능/메모이제이션](basics/30_perf_memory.js)  

### 🔹 패턴(40)
1. [싱글턴](patterns/01_singleton.js)  
2. [팩토리 메서드](patterns/02_factory_method.js)  
3. [추상 팩토리](patterns/03_abstract_factory.js)  
4. [빌더](patterns/04_builder.js)  
5. [프로토타입](patterns/05_prototype.js)  
6. [오브젝트 풀](patterns/06_object_pool.js)  
7. [지연 초기화](patterns/07_lazy_init.js)  
8. [의존성 주입(DI)](patterns/08_dependency_injection.js)  
9. [모듈 패턴](patterns/09_module_pattern.js)  
10. [리빌링 모듈](patterns/10_revealing_module.js)  
11. [네임스페이스 패턴](patterns/11_namespace_pattern.js)  
12. [믹스인](patterns/12_mixin.js)  
13. [플루언트 인터페이스](patterns/13_fluent_interface.js)  
14. [어댑터](patterns/14_adapter.js)  
15. [브리지](patterns/15_bridge.js)  
16. [컴포지트](patterns/16_composite.js)  
17. [데코레이터(객체)](patterns/17_decorator.js)  
18. [퍼사드](patterns/18_facade.js)  
19. [플라이웨이트](patterns/19_flyweight.js)  
20. [프록시](patterns/20_proxy.js)  
21. [옵저버](patterns/21_observer.js)  
22. [퍼브섭(Pub-Sub)](patterns/22_pubsub.js)  
23. [미디에이터](patterns/23_mediator.js)  
24. [커맨드](patterns/24_command.js)  
25. [책임 연쇄](patterns/25_chain_of_responsibility.js)  
26. [반복자](patterns/26_iterator.js)  
27. [인터프리터](patterns/27_interpreter.js)  
28. [메멘토](patterns/28_memento.js)  
29. [상태](patterns/29_state.js)  
30. [전략](patterns/30_strategy.js)  
31. [템플릿 메서드](patterns/31_template_method.js)  
32. [비지터](patterns/32_visitor.js)  
33. [널 오브젝트](patterns/33_null_object.js)  
34. [스펙ification](patterns/34_specification.js)  
35. [쓰로틀/디바운스/커링/부분적용/메모이제이션](patterns/35_throttle_debounce_currying.js)  
36. [미들웨어(파이프라인)](patterns/36_middleware.js)  
37. [파이프라인](patterns/37_pipeline.js)  
38. [재시도+백오프](patterns/38_retry_backoff.js)  
39. [서킷 브레이커](patterns/39_circuit_breaker.js)  
40. [저장소(Repository)](patterns/40_repository.js)  

---

## 노트
- 모든 예제는 **독립 실행** 가능하게 작성되어 있어 기존 코드에 영향이 없습니다.
- 브라우저 전용 기능(DOM)은 배제했고, 런타임 불일치를 피하기 위해 Node에서 실행되는 JS 중심으로 구성했습니다.
- ESM/CJS 예시는 프로젝트 설정에 따라 동작이 달라질 수 있어, 파일 내에 **개념 주석**으로 명확히 구분했습니다.

## 확장 아이디어
- 각 주제 별 **퀴즈/연습문제** 추가
- 테스트 코드(`vitest`/`jest`)와 린팅(`eslint`) 템플릿
- 브라우저/DOM/Canvas/Web API 별도 섹션

---

행복한 코딩 되세요! 🚀
