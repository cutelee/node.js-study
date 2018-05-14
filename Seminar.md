# Node.js
  웹브라우저가 아닌 곳에서 자바스크립트를 사용하기 위한 실행환경(JavaScript Runtime)으로 서버 환경에서 자바스크립트를 사용하기 위한 것이다. 대규모 네트워크 애플리케이션 개발을 가능하게 한다.

***

# Node.js Network Application
## 기존 Network Application
  thread를 기반으로 하는 **동기 방식** 으로 네트워크 입출력을 처리한다. Multi-Thread Network Application.

### thread 기반 동기 방식
  작업 요청이 들어올 때마다 스레드를 여러 개 만들어서 일을 처리하는 방식으로 일이 많아질수록 스레드를 더 많이 만들어야 하기 때문에 메모리 사용량이 계속 증가한다는 단점이 있다. 또한, 서버의 자원이 제한되어 있기 때문에 thread를 무한정 생산할 수 없다.

  * **동기 방식**
    하나의 요청이 처리되는 동안 다른 요청이 처리되지 못하며, 요청이 완료되어야만 다음 처리가 가능한 방식

## Node.js Network application
  event를 기반으로 하는 **비동기 방식** 으로 네트워크 입출력을 처리하기 때문에, 대규모 네트워크 애플리케이션 개발에 적합하다.

### event 기반 비동기 방식
  클라이언트의 요청을 비동기로 처리하기 위해 이벤트가 발생하며, 발생한 이벤트는 서버 내부에 메세지 형태로 전달된다. 서버 내부에서는 *EventLoop* 가 이 메세지를 처리하게 된다. EventLoop가 처리하는 동안 제어권은 다음 요청으로 넘어가게 되고, 처리가 완료되면 Callback을 호출해 처리 완료를 호출 측에 알려준다.

  > EventLoop는 요청을 처리하기 위해 내부적으로 약간의 Thread와 Process를 사용한다. Non-blocking I/O 처리나 내부 처리를 위한 목적으로만 사용하며, 요청 처리 자체를 Thread로 하지는 않는다. 따라서 Node 서버는 Multi-Thread 방식의 서버에 비해 Thread 수와 오버헤드가 적다.

  * **비동기 방식**
    하나의 요청 처리가 완료되기 전에 제어권을 다음 요청으로 넘기기 때문에, I/O 처리에서 Blocking 되지 않고 다음 요청을 처리

***

# Node의 약점
  이벤트를 처리하는 EventLoop는 Single-Thread로 이루어져 있기 때문에 요청 처리가 하나의 Thread에서 처리된다. 이벤트 호출 측에서는 비동기로 처리되지만, 작업 처리 시간이 오래 걸릴 경우 전체 서버 처리에 영향을 주게 된다. 따라서 처리 작업이 CPU 소모량이 크거나 대용량 파일을 처리하는 등의 작업에는 부적절하며 I/O 작업이 별로 없는 애플리케이션이나 단위작업이 짧은 메시징 애플리케이션의 경우 고성능의 서버 구현이 가능하다.


***

# Node.js 개발환경 구축
## LTS Version vs Current Version
  1. LTS Version

    나중에 추가할게용

  2. Current Version

***

# Node.js의 전역 객체
## 전역 변수
  웹 브라우저에서 동작하는 자바스크립트의 최상위 객체는 *window객체* 로, 웹 브라우저 자체와 관련된 속성과 메서드를 가지고 있다. 하지만 Node.js는 웹 브라우저에서 동작하는 것이 아니기 때문에, window객체가 없다. 대신에 전역변수와 전역객체를 가진다.

  > Node.js에 global 객체가 존재하지만, \_\_filename, \_\_dirname과 전역 함수 require()는 global객체에 포함되지 않으므로, window객체와 같은 최상위 객체가 없다고 표현한 것. (출처: 모던 웹을 위한 Node.js 프로그래밍)

  \__filename: 현재 실행 중인 코드의 파일 경로를 나타냄
  \__dirname: 현재 실행 중인 코드의 폴더 경로를 나타냄

## 전역 객체
  1. console object

    *01_Study > global > objet.console.js*

    **콘솔 화면** 과 관련된 기능을 다루는 객체

    * console object method
      log(): 출력
      time(): 시간 측정 시작
      timeEnd(): 시간 측정 종료

    * 특수 문자
      %d: 숫자
      %s: 문자열
      %j: JSON

  2. process object

  *01_Study > global > object.process.js*

    **프로그램** 과 관련된 기능을 다루는 객체
    프로그램과 관련된 정보를 나타내며 웹 브라우저에서 작동하는 자바스크립트에는 존재하지 않으며, Node.js만이 가진 객체

    * process object attribute
      argv: 실행 매개변수
      env: 컴퓨터 환경과 관련된 정보
      version: Node.js 버전
      versions: Node.js와 종속된 프로그램 버전
      arch: 프로세서 아키텍처
      platform: 플랫폼

  3. exports object, module
    **모듈** 과 관련된 기능을 다루는 객체


***

# socket.io Module

## socket.io module 기본

### Server

### Client

### Event

## 소켓 통신 종류

public: 자신을 포함한 모든 클라이언트에 데이터를 전달

broadcast: 자신을 제외한 모든 클라이언트에 데이터를 전달

private: 특정 클라이언트에 데이터를 전달(채팅에서 귓속말을 하는 경우)

## public 통신

*01_Study > socket.io > socket.io.server.public.js*

public 통신을 구현하는 방법은 io.sockets 객체의 emit() 메서드를 사용하면 된다.
