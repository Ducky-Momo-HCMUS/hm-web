import { GraphQLResolveInfo } from 'graphql';

export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Contact = {
  __typename?: 'Contact';
  mxh: Scalars['String'];
  url: Scalars['String'];
};

export type HomeroomList = {
  __typename?: 'HomeroomList';
  lopSinhHoat: Array<HomeroomListItem>;
};

export type HomeroomListItem = {
  __typename?: 'HomeroomListItem';
  heDaoTao: Scalars['String'];
  khoa: Scalars['Int'];
  maSH: Scalars['String'];
};

export type HomeroomStudentListItem = {
  __typename?: 'HomeroomStudentListItem';
  gpa4: Scalars['Float'];
  gpa10: Scalars['Float'];
  lienHe: Array<Contact>;
  maCN: Scalars['String'];
  maSV: Scalars['String'];
  sdt: Scalars['String'];
  tenSV: Scalars['String'];
  tinhTrang: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  ping?: Maybe<Scalars['String']>;
};

export type MutationResponse = {
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  homeroomList: HomeroomList;
  homeroomStudentList?: Maybe<Array<HomeroomStudentListItem>>;
  ping?: Maybe<Scalars['String']>;
};

export type QueryHomeroomStudentListArgs = {
  homeroomId: Scalars['String'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Contact: ResolverTypeWrapper<Contact>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  HomeroomList: ResolverTypeWrapper<HomeroomList>;
  HomeroomListItem: ResolverTypeWrapper<HomeroomListItem>;
  HomeroomStudentListItem: ResolverTypeWrapper<HomeroomStudentListItem>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: never;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Contact: Contact;
  Float: Scalars['Float'];
  HomeroomList: HomeroomList;
  HomeroomListItem: HomeroomListItem;
  HomeroomStudentListItem: HomeroomStudentListItem;
  Int: Scalars['Int'];
  Mutation: {};
  MutationResponse: never;
  Query: {};
  String: Scalars['String'];
};

export type ContactResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Contact'] = ResolversParentTypes['Contact']
> = {
  mxh?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomList'] = ResolversParentTypes['HomeroomList']
> = {
  lopSinhHoat?: Resolver<
    Array<ResolversTypes['HomeroomListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomListItem'] = ResolversParentTypes['HomeroomListItem']
> = {
  heDaoTao?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  khoa?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maSH?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeroomStudentListItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HomeroomStudentListItem'] = ResolversParentTypes['HomeroomStudentListItem']
> = {
  gpa4?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  gpa10?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lienHe?: Resolver<Array<ResolversTypes['Contact']>, ParentType, ContextType>;
  maCN?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sdt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenSV?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tinhTrang?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  ping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type MutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  homeroomList?: Resolver<
    ResolversTypes['HomeroomList'],
    ParentType,
    ContextType
  >;
  homeroomStudentList?: Resolver<
    Maybe<Array<ResolversTypes['HomeroomStudentListItem']>>,
    ParentType,
    ContextType,
    RequireFields<QueryHomeroomStudentListArgs, 'homeroomId'>
  >;
  ping?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Contact?: ContactResolvers<ContextType>;
  HomeroomList?: HomeroomListResolvers<ContextType>;
  HomeroomListItem?: HomeroomListItemResolvers<ContextType>;
  HomeroomStudentListItem?: HomeroomStudentListItemResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};
