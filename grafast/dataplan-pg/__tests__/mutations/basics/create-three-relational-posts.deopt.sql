insert into interfaces_and_unions.relational_items as __relational_items__ ("type", "author_id") values ($1::interfaces_and_unions.item_type, $2::"int4") returning
  __relational_items__."id"::text as "0";

insert into interfaces_and_unions.relational_posts as __relational_posts__ ("id", "title", "description", "note") values ($1::"int4", $2::"text", $3::"text", $4::"text");

insert into interfaces_and_unions.relational_items as __relational_items__ ("type", "author_id") values ($1::interfaces_and_unions.item_type, $2::"int4") returning
  __relational_items__."id"::text as "0";

insert into interfaces_and_unions.relational_posts as __relational_posts__ ("id", "title", "description", "note") values ($1::"int4", $2::"text", $3::"text", $4::"text");

insert into interfaces_and_unions.relational_items as __relational_items__ ("type", "author_id") values ($1::interfaces_and_unions.item_type, $2::"int4") returning
  __relational_items__."id"::text as "0";

insert into interfaces_and_unions.relational_posts as __relational_posts__ ("id", "title", "description", "note") values ($1::"int4", $2::"text", $3::"text", $4::"text") returning
  case when (__relational_posts__) is not distinct from null then null::text else json_build_array((((__relational_posts__)."id"))::text, ((__relational_posts__)."title"), ((__relational_posts__)."description"), ((__relational_posts__)."note"))::text end as "0";

select __relational_items_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_items_identifiers__,
lateral (
  select
    __relational_items__."type"::text as "0",
    __relational_items__."id"::text as "1",
    __relational_items_identifiers__.idx as "2"
  from interfaces_and_unions.relational_items as __relational_items__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_items__."id" = __relational_items_identifiers__."id0"
    )
) as __relational_items_result__;

select __relational_items_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_items_identifiers__,
lateral (
  select
    __relational_items__."type"::text as "0",
    __relational_items__."id"::text as "1",
    __relational_items_identifiers__.idx as "2"
  from interfaces_and_unions.relational_items as __relational_items__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_items__."id" = __relational_items_identifiers__."id0"
    )
) as __relational_items_result__;

select __relational_items_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_items_identifiers__,
lateral (
  select
    __relational_items__."type"::text as "0",
    __relational_items__."id"::text as "1",
    __relational_items_identifiers__.idx as "2"
  from interfaces_and_unions.relational_items as __relational_items__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_items__."id" = __relational_items_identifiers__."id0"
    )
) as __relational_items_result__;

select __relational_posts_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_posts_identifiers__,
lateral (
  select
    __relational_posts__."title" as "0",
    __relational_posts__."description" as "1",
    __relational_posts__."note" as "2",
    __relational_posts__."id"::text as "3",
    __relational_posts_identifiers__.idx as "4"
  from interfaces_and_unions.relational_posts as __relational_posts__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_posts__."id" = __relational_posts_identifiers__."id0"
    )
) as __relational_posts_result__;

select __relational_posts_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_posts_identifiers__,
lateral (
  select
    __relational_posts__."title" as "0",
    __relational_posts__."description" as "1",
    __relational_posts__."note" as "2",
    __relational_posts__."id"::text as "3",
    __relational_posts_identifiers__.idx as "4"
  from interfaces_and_unions.relational_posts as __relational_posts__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_posts__."id" = __relational_posts_identifiers__."id0"
    )
) as __relational_posts_result__;

select __relational_posts_result__.*
from (select 0 as idx, $1::"int4" as "id0") as __relational_posts_identifiers__,
lateral (
  select
    __relational_posts__."title" as "0",
    __relational_posts__."description" as "1",
    __relational_posts__."note" as "2",
    __relational_posts__."id"::text as "3",
    __relational_posts_identifiers__.idx as "4"
  from interfaces_and_unions.relational_posts as __relational_posts__
  where
    (
      true /* authorization checks */
    ) and (
      __relational_posts__."id" = __relational_posts_identifiers__."id0"
    )
) as __relational_posts_result__;
