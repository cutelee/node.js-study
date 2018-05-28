

# MySQL DATABASES
## What is MySQL
세계에서 가장 많이 사용되는 오픈소스의 관계형 데이터베이스 관리 시스템(RDBMS)이다. 다중 스레드, 다중 사용자 형식의 구조 질의어 형식의 데이터베이스 관리 시스템.

## Workbench
사용자에게 MySQL 데이터베이스 관리를 그래픽적으로 지원하게 해준다. 데이터베이스 구조의 설계도 시각적으로 하게 해주는 MySQL AB에 의해 개발된 자유로운 집적 환경을 가지고 있다.

* * *
# RDBMS
관계형 데이터베이스 관리 시스템. Relational Database Management System. 관계형 모델을 기반으로 하는 데이터베이스 관리 시스템.
## DBMS
데이터베이스 관리 시스템. 데이터들이 모여 이루는 데이터 단위로 데이터를 저장, 유지보수(수정, 삭제, 추가) 하고 이를 검색하는 시스템을 발한다.
### CRUD
Create, Retrieve, Update, Delete. 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 생성, 읽기, 갱신, 삭제를 묶어서 일컫는 말이다.
* 유사용어 : ABCD, ACID, BREAD, VADE

참고링크 :  https://ko.wikipedia.org/wiki/CRUD

## RDBMS
관계형 데이터베이스 시스템으로, 테이블 기반의 DBMS를 말한다. 테이블-컬럼 형태로 데이터를 저장하고, 테이블간의 연관관계(주로 외래키 형태)를 이용해 필요한 정보를 구하는 방식이다.

> 모델링은 E-R(Entity Relationship 모델을 사용하며, 테이블을 Entity(기본)과 Relationship(유도) 테이블로 구분하는 방식이다.

## 기본용어
* 스키마(Schema) : DB, 테이블 정의 내역
* SQL Query : 관계형 DBMS를 사용하는 전용 질의언어. 대소문자 가리지 않으며, interpreter 언어.
* Primary Key(PK, 기본키) : 테이블에서 하나의 레코드를 지정할 수 있는 하나 이상의 컬럼 집합
* Foreign Key(FK, 외래키) : 어떤 테이블의 기본키가 다른 테이블의 컬럼에 들어 있는 경우
* Table : 정보들의 묶음 단위
* Column : 테이블을 구성하는 정보
* Record : 테이블에 들어 있는 여러가지 인스턴스 하나하나를 지정, 기본키(PK)로 구별가능.
* Domain Value(도메인 값) : 각 컬럼에서 나올 수 있는 후보 값
- - -
# 기본 명령어 정리
MySQL 데이터베이스의 가장 기본적인 개념과 MySQL 데이터베이스 코드라고 부를 수 있는 쿼리 문장에 대해 정리. 데이터베이스는 데이터를 자신에게 곧바로 입력하는 것이 아니라 데이터가 입력되어 있는 테이블을 소유한다.
## 데이터베이스 생성

    mysql> CREATE DATABASE Company;
    Query OK, 1 row affected (0.06sec)

데이터베이스를 생성할 때에는 `CREATE DATABASE 이름` 형태의 쿼리 문장을 사용한다. 위 예시를 입력하면 Company라는 이름을 가진 데이터베이스가 생긴다. 데이터베이스를 생성한 후에는 데이터베이스를 사용하겠다고 선언해야 한다.

    mysql> USE Company
    Database changed

라고 입력하면 데이터베이스 사용을 선언할 수 있다.

## 테이블 생성
데이터베이스를 도서관에 비유할 때, 테이블은 도서관에 꽂혀있는 책이라고 볼 수 있다. MySQL에서 테이블은 각각의 정보를 저장할 수 있는 표 형태로 존재한다. 이 때, 세로에 위치한 열(Column)을 필드(Field)라고 부르고, 가로에 위치한 행(Row)을 레코드(Record)라고 부른다. 테이블에 종종 사용되는 자료형에는 VARCHAR(문자열), INT(정수), DOUBLE(실수) 등이 있다. 테이블을 생성할 때는 `CREATE TABLE 테이블명 ()` 형태의 쿼리문장으로 생성할 수 있다.

    mysql> CREATE TABLE products(
	    ->	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	    ->	name VARCHAR(50) NOT NULL,
	    ->	modelnumber VARCHAR(15) NOT NULL,
	    ->	series VARCHAR(30) NOT NULL
	    -> );
	Query OK, 0 rows affected (0.16sec)

* NOT NULL : 반드시 입력해야 하는 필드로 생성
* AUTO_INCREMENT : 자동으로 숫자가 증가하도록 생성
* PRIMARY KEY : 기본 키로 지정

테이블을 생성한 후에는 `DESCRIBE 테이블명` 쿼리 문장을 통해 테이블 필드와 관련된 정보를 살펴볼 수 있다.

    	mysql> DESCRIBE products;
    +-------------+-------------+------+-----+---------+----------------+
    | Field       | Type        | Null | Key | Default | Extra          |
    +-------------+-------------+------+-----+---------+----------------+
    | id          | int(11)     | NO   | PRI | NULL    | auto_increment |
    | name        | varchar(50) | NO   |     | NULL    |                |
    | modelnumber | varchar(50) | NO   |     | NULL    |                |
    | series      | varchar(30) | NO   |     | NULL    |                |
    +-------------+-------------+------+-----+---------+----------------+
    4 rows in set (0.01 sec)

## 데이터 저장
## 데이터 조회
## 조건 검사
## 데이터 정렬
## 특정 위치에 있는 데이터 선택
## 데이터 수정
## 데이터 삭제
나중에 따로 정리해둘게요; 너무 오래 걸리네요.

- - -
# MySQL 모듈
