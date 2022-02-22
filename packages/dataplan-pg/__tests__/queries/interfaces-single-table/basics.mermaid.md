```mermaid
graph TD
    classDef path fill:#eee,stroke:#000
    classDef plan fill:#fff,stroke-width:3px
    classDef itemplan fill:#fff,stroke-width:6px
    classDef sideeffectplan fill:#f00,stroke-width:6px

    %% subgraph fields
    P1{{"~"}}:::path
    P2[/">people"\]:::path
    P3>">people[]"]:::path
    P2 -.- P3
    P4([">pe…e[]>username"]):::path
    %% P3 -.-> P4
    P5[/">pe…e[]>items"\]:::path
    P6>">pe…e[]>items[]"]:::path
    P5 -.- P6
    P7([">pe…e[]>items[]>id"]):::path
    %% P6 -.-> P7
    P8([">pe…e[]>items[]>type"]):::path
    %% P6 -.-> P8
    P9([">pe…e[]>items[]>type2"]):::path
    %% P6 -.-> P9
    P10([">pe…e[]>items[]>position"]):::path
    %% P6 -.-> P10
    P11([">pe…e[]>items[]>createdAt"]):::path
    %% P6 -.-> P11
    P12([">pe…e[]>items[]>updatedAt"]):::path
    %% P6 -.-> P12
    P13([">pe…e[]>items[]>isExplicitlyArchived"]):::path
    %% P6 -.-> P13
    P14([">pe…e[]>items[]>archivedAt"]):::path
    %% P6 -.-> P14
    P15([">pe…e[]>items[]>id"]):::path
    %% P6 -.-> P15
    P16([">pe…e[]>items[]>type"]):::path
    %% P6 -.-> P16
    P17([">pe…e[]>items[]>type2"]):::path
    %% P6 -.-> P17
    P18([">pe…e[]>items[]>position"]):::path
    %% P6 -.-> P18
    P19([">pe…e[]>items[]>createdAt"]):::path
    %% P6 -.-> P19
    P20([">pe…e[]>items[]>updatedAt"]):::path
    %% P6 -.-> P20
    P21([">pe…e[]>items[]>isExplicitlyArchived"]):::path
    %% P6 -.-> P21
    P22([">pe…e[]>items[]>archivedAt"]):::path
    %% P6 -.-> P22
    P23([">pe…e[]>items[]>id"]):::path
    %% P6 -.-> P23
    P24([">pe…e[]>items[]>type"]):::path
    %% P6 -.-> P24
    P25([">pe…e[]>items[]>type2"]):::path
    %% P6 -.-> P25
    P26([">pe…e[]>items[]>position"]):::path
    %% P6 -.-> P26
    P27([">pe…e[]>items[]>createdAt"]):::path
    %% P6 -.-> P27
    P28([">pe…e[]>items[]>updatedAt"]):::path
    %% P6 -.-> P28
    P29([">pe…e[]>items[]>isExplicitlyArchived"]):::path
    %% P6 -.-> P29
    P30([">pe…e[]>items[]>archivedAt"]):::path
    %% P6 -.-> P30
    P31([">pe…e[]>items[]>id"]):::path
    %% P6 -.-> P31
    P32([">pe…e[]>items[]>type"]):::path
    %% P6 -.-> P32
    P33([">pe…e[]>items[]>type2"]):::path
    %% P6 -.-> P33
    P34([">pe…e[]>items[]>position"]):::path
    %% P6 -.-> P34
    P35([">pe…e[]>items[]>createdAt"]):::path
    %% P6 -.-> P35
    P36([">pe…e[]>items[]>updatedAt"]):::path
    %% P6 -.-> P36
    P37([">pe…e[]>items[]>isExplicitlyArchived"]):::path
    %% P6 -.-> P37
    P38([">pe…e[]>items[]>archivedAt"]):::path
    %% P6 -.-> P38
    P39([">pe…e[]>items[]>id"]):::path
    %% P6 -.-> P39
    P40([">pe…e[]>items[]>type"]):::path
    %% P6 -.-> P40
    P41([">pe…e[]>items[]>type2"]):::path
    %% P6 -.-> P41
    P42([">pe…e[]>items[]>position"]):::path
    %% P6 -.-> P42
    P43([">pe…e[]>items[]>createdAt"]):::path
    %% P6 -.-> P43
    P44([">pe…e[]>items[]>updatedAt"]):::path
    %% P6 -.-> P44
    P45([">pe…e[]>items[]>isExplicitlyArchived"]):::path
    %% P6 -.-> P45
    P46([">pe…e[]>items[]>archivedAt"]):::path
    %% P6 -.-> P46
    %% P3 -.-> P5
    %% P1 -.-> P2
    %% end

    %% define plans
    __Value_3["__Value[_3∈0]<br /><context>"]:::plan
    __Value_5["__Value[_5∈0]<br /><rootValue>"]:::plan
    PgSelect_7["PgSelect[_7∈0]<br /><people>"]:::plan
    __Item_11>"__Item[_11∈1]<br /><_7>"]:::itemplan
    PgSelectSingle_12["PgSelectSingle[_12∈1]<br /><people>"]:::plan
    PgClassExpression_13["PgClassExpression[_13∈1]<br /><__people__.#quot;username#quot;>"]:::plan
    Access_16["Access[_16∈0]<br /><_3.pgSettings>"]:::plan
    Access_17["Access[_17∈0]<br /><_3.withPgClient>"]:::plan
    Object_18["Object[_18∈0]<br /><{pgSettings,withPgClient}>"]:::plan
    __ListTransform_19["__ListTransform[_19∈1]<br /><each:_15>"]:::plan
    __Item_20>"__Item[_20∈2]<br /><_67>"]:::itemplan
    PgSelectSingle_21["PgSelectSingle[_21∈2]<br /><single_table_items>"]:::plan
    __Item_22>"__Item[_22∈3]<br /><_19>"]:::itemplan
    PgSelectSingle_23["PgSelectSingle[_23∈3]<br /><single_table_items>"]:::plan
    PgClassExpression_24["PgClassExpression[_24∈3]<br /><__single_t...s__.#quot;type#quot;>"]:::plan
    Lambda_25["Lambda[_25∈3]"]:::plan
    PgSingleTablePolymorphic_26["PgSingleTablePolymorphic[_26∈3]"]:::plan
    PgClassExpression_27["PgClassExpression[_27∈3]<br /><__single_t...ems__.#quot;id#quot;>"]:::plan
    PgClassExpression_29["PgClassExpression[_29∈3]<br /><__single_t...__.#quot;type2#quot;>"]:::plan
    PgClassExpression_30["PgClassExpression[_30∈3]<br /><__single_t...#quot;position#quot;>"]:::plan
    PgClassExpression_31["PgClassExpression[_31∈3]<br /><__single_t...reated_at#quot;>"]:::plan
    PgClassExpression_32["PgClassExpression[_32∈3]<br /><__single_t...pdated_at#quot;>"]:::plan
    PgClassExpression_33["PgClassExpression[_33∈3]<br /><__single_t..._archived#quot;>"]:::plan
    PgClassExpression_34["PgClassExpression[_34∈3]<br /><__single_t...chived_at#quot;>"]:::plan
    Access_67["Access[_67∈1]<br /><_11.1>"]:::plan

    %% plan dependencies
    Object_18 --> PgSelect_7
    PgSelect_7 ==> __Item_11
    __Item_11 --> PgSelectSingle_12
    PgSelectSingle_12 --> PgClassExpression_13
    __Value_3 --> Access_16
    __Value_3 --> Access_17
    Access_16 --> Object_18
    Access_17 --> Object_18
    Access_67 --> __ListTransform_19
    PgSelectSingle_21 -.-> __ListTransform_19
    Access_67 -.-> __Item_20
    __Item_20 --> PgSelectSingle_21
    __ListTransform_19 ==> __Item_22
    __Item_22 --> PgSelectSingle_23
    PgSelectSingle_23 --> PgClassExpression_24
    PgClassExpression_24 --> Lambda_25
    Lambda_25 --> PgSingleTablePolymorphic_26
    PgSelectSingle_23 --> PgSingleTablePolymorphic_26
    PgSelectSingle_23 --> PgClassExpression_27
    PgSelectSingle_23 --> PgClassExpression_29
    PgSelectSingle_23 --> PgClassExpression_30
    PgSelectSingle_23 --> PgClassExpression_31
    PgSelectSingle_23 --> PgClassExpression_32
    PgSelectSingle_23 --> PgClassExpression_33
    PgSelectSingle_23 --> PgClassExpression_34
    __Item_11 --> Access_67

    %% plan-to-path relationships
    __Value_5 -.-> P1
    PgSelect_7 -.-> P2
    PgSelectSingle_12 -.-> P3
    PgClassExpression_13 -.-> P4
    __ListTransform_19 -.-> P5
    PgSingleTablePolymorphic_26 -.-> P6
    PgClassExpression_27 -.-> P7
    PgClassExpression_24 -.-> P8
    PgClassExpression_29 -.-> P9
    PgClassExpression_30 -.-> P10
    PgClassExpression_31 -.-> P11
    PgClassExpression_32 -.-> P12
    PgClassExpression_33 -.-> P13
    PgClassExpression_34 -.-> P14
    PgClassExpression_27 -.-> P15
    PgClassExpression_24 -.-> P16
    PgClassExpression_29 -.-> P17
    PgClassExpression_30 -.-> P18
    PgClassExpression_31 -.-> P19
    PgClassExpression_32 -.-> P20
    PgClassExpression_33 -.-> P21
    PgClassExpression_34 -.-> P22
    PgClassExpression_27 -.-> P23
    PgClassExpression_24 -.-> P24
    PgClassExpression_29 -.-> P25
    PgClassExpression_30 -.-> P26
    PgClassExpression_31 -.-> P27
    PgClassExpression_32 -.-> P28
    PgClassExpression_33 -.-> P29
    PgClassExpression_34 -.-> P30
    PgClassExpression_27 -.-> P31
    PgClassExpression_24 -.-> P32
    PgClassExpression_29 -.-> P33
    PgClassExpression_30 -.-> P34
    PgClassExpression_31 -.-> P35
    PgClassExpression_32 -.-> P36
    PgClassExpression_33 -.-> P37
    PgClassExpression_34 -.-> P38
    PgClassExpression_27 -.-> P39
    PgClassExpression_24 -.-> P40
    PgClassExpression_29 -.-> P41
    PgClassExpression_30 -.-> P42
    PgClassExpression_31 -.-> P43
    PgClassExpression_32 -.-> P44
    PgClassExpression_33 -.-> P45
    PgClassExpression_34 -.-> P46

    %% allocate buckets
    classDef bucket0 stroke:#696969
    class __Value_3,__Value_5,PgSelect_7,Access_16,Access_17,Object_18 bucket0
    classDef bucket1 stroke:#a52a2a
    class __Item_11,PgSelectSingle_12,PgClassExpression_13,__ListTransform_19,Access_67 bucket1
    classDef bucket2 stroke:#808000
    class __Item_20,PgSelectSingle_21 bucket2
    classDef bucket3 stroke:#3cb371
    class __Item_22,PgSelectSingle_23,PgClassExpression_24,Lambda_25,PgSingleTablePolymorphic_26,PgClassExpression_27,PgClassExpression_29,PgClassExpression_30,PgClassExpression_31,PgClassExpression_32,PgClassExpression_33,PgClassExpression_34 bucket3
```