참고할 글
1. 백앤드 구축 로드맵
https://planbs.tistory.com/entry/%EB%B0%B1%EC%97%94%EB%93%9C%EA%B0%80-%EC%9D%B4%EC%A0%95%EB%8F%84%EB%8A%94-%ED%95%B4%EC%A4%98%EC%95%BC-%ED%95%A8-3-%EA%B0%9C%EB%B0%9C-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4-%EC%A0%95%EB%A6%BD
2. JWT
https://velopert.com/2389
3. DB 구조 설계


## 버전 관리 시스템
git

## 이슈 트래킹
GitHub

## API 설계 원칙
http

## 직렬화 방식
JSON

## 사용자 인증 방식
Authorizaton 헤더
인증 스키마:
JWT을 사용하는 Bearer

## server API 및 DB구조 정리

머메이드 라이브 에디터
https://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqwhttps://mermaid.live/edit#pako:eNpVjk2Lg0AMhv9KyGkL9Q94WGh1t5fCFurN6SFo7AztfDBGpKj_fcd62c0pvM_zhkzY-JYxx-7px0ZTFKhK5SDNoS50NL1Y6m-QZZ_ziQWsd_ya4fhx8tBrH4Jx993mH1cJium8agyijXssGyre_R_HM5T1mYL4cPtLqtHP8FWbi07n_xMdObW-647yjrKGIhQU3wru0XK0ZNr0_rQmCkWzZYV5WlvuaHiKQuWWpNIg_vpyDeYSB97jEFoSLg3dI9ktXH4B_cJWqw

```mermaid
---
title: shopping-mall
---
erDiagram
    USER ||--o{ ITEM : sells
    ITEM ||--o{ REVIEW : has
    CATEGORY ||--o{ ITEM : includes
    USER ||--o{ USER-COUPON : connects
    CART-ITEM ||--|| COUPON : links
    
    USER-COUPON }o--|| COUPON: connects
    USER ||--o{ CART-ITEM : has
    CART-ITEM ||--|| ITEM : links
    USER {
        int id PK "유저 고유 번호"
        VARCHAR(10) name  "유저 이름"
        VARCHAR(13) phone  "xxx-xxxx-xxxx"
        TIMESTAMP registered_at  "가입날짜"
        VARCHAR(50) address_lv1  "우편번호"
        VARCHAR(50) address_lv2  "상세주소"
        int rank  "멤버 등급"
        int rank_point  "등급 포인트"
        int membership_point  "적립금"
        boolean admin_priv "어드민 권한"
        boolean sales_priv  "판매자 권한"        
        VARCHAR(50) email  "유저 이메일"
        VARCHAR(100) pw  "유저 비밀번호(암호화)"
        VARCHAR(1000) refreshToken  "JWT 리프레쉬 토큰"
    }    

    ITEM{
        int id PK "상품 고유 번호"
        int publisher_id FK "USER-id"
        int category_id FK "CATEGORY-id"
        VARCHAR(50) name  "상품 이름"
        int price  "가격"
        boolean couponable  "쿠폰적용가능유무"
        DECIMAL sale  "세일 퍼센트"
        TIMESTAMP posted_at  "등록날짜"
    }
    USER-COUPON{
        int id  "고유 번호"
        int user_id FK "USER-id"
        int coupon_id FK "COUPON-id"        
    }
    COUPON{
        int id PK "쿠폰 고유 번호"
        int percent  "쿠폰 금액"
        TIMESTAMP due  "유효기간"
    }
    CART-ITEM{
        int id PK "고유 번호"
        int uid FK "USER-id"
        int iid FK "ITEM-id"
        int cid FK "COUPON-id"
        int status  "상품 배송 상태"
        int point_spend  "사용한 포인트"
    }
    REVIEW{
        int id PK "리뷰 고유 번호"
        int item_id FK "ITEM-id"
        VARCHAR(50) user_id FK "USER-id"
        int star  "별점(0~5)"        
        VARCHAR(1000) content  "내용"
    }

    CATEGORY{
        int id PK "카테고리 고유 번호"
        VARCHAR(50) name  "카테고리 이름"
    }
```


|summary|URI|Request Header|Params|Request Body|Status Code|Response Header|Response Body|
|---|---|---|---|---|---|---|---|
|회원가입|POST /signup|---|---|---|---|---|---|
|JWT토큰 발행|GET /signin|---|---|---|---|---|---|
|JWT토큰 리프레쉬|GET /refresh|---|---|---|---|---|---|
|상품 카테고리 추가|POST /admin/category|---|---|---|---|---|---|
|카테고리에 상품 추가|POST /admin/{category_id}/post|---|---|---|---|---|---|
|특정 카테고리 상품 목록|GET /{category_id}/post|---|---|---|---|---|---|
|상품 상세페이지|GET /{category_id}/{post_id}|---|---|---|---|---|---|
|상품 수정|PATCH /{category_id}/{post_id}|---|---|---|---|---|---|
