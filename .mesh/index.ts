// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: URL | string;
  /** Represents empty values */
  Void: void;
  /** Represents date values */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date | string;
};

export type Query = {
  searchShows?: Maybe<Array<Maybe<QuerySearchShowsItems>>>;
  schedules?: Maybe<Array<Maybe<QuerySchedulesItems>>>;
  webStreamingSchedules?: Maybe<Array<Maybe<QueryWebStreamingSchedulesItems>>>;
  fullSchedule?: Maybe<FullScheduleConnection>;
};


export type QuerysearchShowsArgs = {
  query?: InputMaybe<Scalars['ID']>;
};


export type QueryschedulesArgs = {
  countryIso?: InputMaybe<Scalars['ID']>;
  dateIso?: InputMaybe<Scalars['ID']>;
};


export type QuerywebStreamingSchedulesArgs = {
  dateIso?: InputMaybe<Scalars['ID']>;
  countryIso?: InputMaybe<Scalars['ID']>;
};

export type QuerySearchShowsItems = {
  score?: Maybe<Scalars['Float']>;
  show?: Maybe<QuerySearchShowsItemsShow>;
};

export type QuerySearchShowsItemsShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Void']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySearchShowsItemsShowSchedule>;
  rating?: Maybe<QuerySearchShowsItemsShowRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['Void']>;
  webChannel?: Maybe<QuerySearchShowsItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySearchShowsItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySearchShowsItemsShowLinks>;
};

export type QuerySearchShowsItemsShowSchedule = {
  time?: Maybe<Scalars['String']>;
  days?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuerySearchShowsItemsShowRating = {
  average?: Maybe<Scalars['Float']>;
};

export type QuerySearchShowsItemsShowWebChannel = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
};

export type QuerySearchShowsItemsShowExternals = {
  tvrage?: Maybe<Scalars['Void']>;
  thetvdb?: Maybe<Scalars['Int']>;
  imdb?: Maybe<Scalars['String']>;
};

export type QuerySearchShowsItemsShowImage = {
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
};

export type QuerySearchShowsItemsShowLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  previousepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QuerySearchShowsItemsShowLinksSelf = {
  href?: Maybe<Scalars['URL']>;
};

export type QuerySchedulesItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['Void']>;
  show?: Maybe<QuerySchedulesItemsShow>;
  links?: Maybe<QuerySchedulesItemsLinks>;
};

export type QuerySchedulesItemsRating = {
  average?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySchedulesItemsShowSchedule>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['Void']>;
  webChannel?: Maybe<QuerySchedulesItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySchedulesItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySchedulesItemsShowLinks>;
};

export type QuerySchedulesItemsShowSchedule = {
  time?: Maybe<Scalars['String']>;
  days?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuerySchedulesItemsShowWebChannel = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<QuerySchedulesItemsShowWebChannelCountry>;
  officialSite?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShowWebChannelCountry = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export type QuerySchedulesItemsShowExternals = {
  tvrage?: Maybe<Scalars['Void']>;
  thetvdb?: Maybe<Scalars['Int']>;
  imdb?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShowLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  previousepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  nextepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QuerySchedulesItemsLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QueryWebStreamingSchedulesItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['String']>;
  links?: Maybe<QuerySchedulesItemsLinks>;
  embedded?: Maybe<QueryWebStreamingSchedulesItemsEmbedded>;
};

export type QueryWebStreamingSchedulesItemsEmbedded = {
  show?: Maybe<QueryWebStreamingSchedulesItemsEmbeddedShow>;
};

export type QueryWebStreamingSchedulesItemsEmbeddedShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySchedulesItemsShowSchedule>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<QuerySchedulesItemsShowWebChannel>;
  webChannel?: Maybe<QuerySchedulesItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySearchShowsItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySchedulesItemsShowLinks>;
};

export type QueryFullScheduleItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['Void']>;
  links?: Maybe<QuerySchedulesItemsLinks>;
  embedded?: Maybe<QueryWebStreamingSchedulesItemsEmbedded>;
};

export type FullSchedule = {
  schedule?: Maybe<FullScheduleConnection>;
};

export type FullScheduleConnection = {
  edges: Array<FullScheduleEdge>;
  pageInfo: PageInfo;
};

export type FullScheduleEdge = {
  cursor: Scalars['String'];
  node: QueryFullScheduleItems;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  QuerySearchShowsItems: ResolverTypeWrapper<QuerySearchShowsItems>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  QuerySearchShowsItemsShow: ResolverTypeWrapper<QuerySearchShowsItemsShow>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  QuerySearchShowsItemsShowSchedule: ResolverTypeWrapper<QuerySearchShowsItemsShowSchedule>;
  QuerySearchShowsItemsShowRating: ResolverTypeWrapper<QuerySearchShowsItemsShowRating>;
  QuerySearchShowsItemsShowWebChannel: ResolverTypeWrapper<QuerySearchShowsItemsShowWebChannel>;
  QuerySearchShowsItemsShowExternals: ResolverTypeWrapper<QuerySearchShowsItemsShowExternals>;
  QuerySearchShowsItemsShowImage: ResolverTypeWrapper<QuerySearchShowsItemsShowImage>;
  QuerySearchShowsItemsShowLinks: ResolverTypeWrapper<QuerySearchShowsItemsShowLinks>;
  QuerySearchShowsItemsShowLinksSelf: ResolverTypeWrapper<QuerySearchShowsItemsShowLinksSelf>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  QuerySchedulesItems: ResolverTypeWrapper<QuerySchedulesItems>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  QuerySchedulesItemsRating: ResolverTypeWrapper<QuerySchedulesItemsRating>;
  QuerySchedulesItemsShow: ResolverTypeWrapper<QuerySchedulesItemsShow>;
  QuerySchedulesItemsShowSchedule: ResolverTypeWrapper<QuerySchedulesItemsShowSchedule>;
  QuerySchedulesItemsShowWebChannel: ResolverTypeWrapper<QuerySchedulesItemsShowWebChannel>;
  QuerySchedulesItemsShowWebChannelCountry: ResolverTypeWrapper<QuerySchedulesItemsShowWebChannelCountry>;
  QuerySchedulesItemsShowExternals: ResolverTypeWrapper<QuerySchedulesItemsShowExternals>;
  QuerySchedulesItemsShowLinks: ResolverTypeWrapper<QuerySchedulesItemsShowLinks>;
  QuerySchedulesItemsLinks: ResolverTypeWrapper<QuerySchedulesItemsLinks>;
  QueryWebStreamingSchedulesItems: ResolverTypeWrapper<QueryWebStreamingSchedulesItems>;
  QueryWebStreamingSchedulesItemsEmbedded: ResolverTypeWrapper<QueryWebStreamingSchedulesItemsEmbedded>;
  QueryWebStreamingSchedulesItemsEmbeddedShow: ResolverTypeWrapper<QueryWebStreamingSchedulesItemsEmbeddedShow>;
  QueryFullScheduleItems: ResolverTypeWrapper<QueryFullScheduleItems>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FullSchedule: ResolverTypeWrapper<FullSchedule>;
  FullScheduleConnection: ResolverTypeWrapper<FullScheduleConnection>;
  FullScheduleEdge: ResolverTypeWrapper<FullScheduleEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  QuerySearchShowsItems: QuerySearchShowsItems;
  Float: Scalars['Float'];
  QuerySearchShowsItemsShow: QuerySearchShowsItemsShow;
  Int: Scalars['Int'];
  URL: Scalars['URL'];
  String: Scalars['String'];
  Void: Scalars['Void'];
  Date: Scalars['Date'];
  QuerySearchShowsItemsShowSchedule: QuerySearchShowsItemsShowSchedule;
  QuerySearchShowsItemsShowRating: QuerySearchShowsItemsShowRating;
  QuerySearchShowsItemsShowWebChannel: QuerySearchShowsItemsShowWebChannel;
  QuerySearchShowsItemsShowExternals: QuerySearchShowsItemsShowExternals;
  QuerySearchShowsItemsShowImage: QuerySearchShowsItemsShowImage;
  QuerySearchShowsItemsShowLinks: QuerySearchShowsItemsShowLinks;
  QuerySearchShowsItemsShowLinksSelf: QuerySearchShowsItemsShowLinksSelf;
  ID: Scalars['ID'];
  QuerySchedulesItems: QuerySchedulesItems;
  DateTime: Scalars['DateTime'];
  QuerySchedulesItemsRating: QuerySchedulesItemsRating;
  QuerySchedulesItemsShow: QuerySchedulesItemsShow;
  QuerySchedulesItemsShowSchedule: QuerySchedulesItemsShowSchedule;
  QuerySchedulesItemsShowWebChannel: QuerySchedulesItemsShowWebChannel;
  QuerySchedulesItemsShowWebChannelCountry: QuerySchedulesItemsShowWebChannelCountry;
  QuerySchedulesItemsShowExternals: QuerySchedulesItemsShowExternals;
  QuerySchedulesItemsShowLinks: QuerySchedulesItemsShowLinks;
  QuerySchedulesItemsLinks: QuerySchedulesItemsLinks;
  QueryWebStreamingSchedulesItems: QueryWebStreamingSchedulesItems;
  QueryWebStreamingSchedulesItemsEmbedded: QueryWebStreamingSchedulesItemsEmbedded;
  QueryWebStreamingSchedulesItemsEmbeddedShow: QueryWebStreamingSchedulesItemsEmbeddedShow;
  QueryFullScheduleItems: QueryFullScheduleItems;
  Boolean: Scalars['Boolean'];
  FullSchedule: FullSchedule;
  FullScheduleConnection: FullScheduleConnection;
  FullScheduleEdge: FullScheduleEdge;
  PageInfo: PageInfo;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  searchShows?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuerySearchShowsItems']>>>, ParentType, ContextType, Partial<QuerysearchShowsArgs>>;
  schedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuerySchedulesItems']>>>, ParentType, ContextType, Partial<QueryschedulesArgs>>;
  webStreamingSchedules?: Resolver<Maybe<Array<Maybe<ResolversTypes['QueryWebStreamingSchedulesItems']>>>, ParentType, ContextType, Partial<QuerywebStreamingSchedulesArgs>>;
  fullSchedule?: Resolver<Maybe<ResolversTypes['FullScheduleConnection']>, ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItems'] = ResolversParentTypes['QuerySearchShowsItems']> = ResolversObject<{
  score?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShow'] = ResolversParentTypes['QuerySearchShowsItemsShow']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  averageRuntime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premiered?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  officialSite?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowSchedule']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowRating']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  webChannel?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowWebChannel']>, ParentType, ContextType>;
  dvdCountry?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  externals?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowExternals']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowImage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface URLScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type QuerySearchShowsItemsShowScheduleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowSchedule'] = ResolversParentTypes['QuerySearchShowsItemsShowSchedule']> = ResolversObject<{
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  days?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowRatingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowRating'] = ResolversParentTypes['QuerySearchShowsItemsShowRating']> = ResolversObject<{
  average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowWebChannelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowWebChannel'] = ResolversParentTypes['QuerySearchShowsItemsShowWebChannel']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  officialSite?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowExternalsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowExternals'] = ResolversParentTypes['QuerySearchShowsItemsShowExternals']> = ResolversObject<{
  tvrage?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  thetvdb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imdb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowImageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowImage'] = ResolversParentTypes['QuerySearchShowsItemsShowImage']> = ResolversObject<{
  medium?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  original?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowLinks'] = ResolversParentTypes['QuerySearchShowsItemsShowLinks']> = ResolversObject<{
  self?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  previousepisode?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySearchShowsItemsShowLinksSelfResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySearchShowsItemsShowLinksSelf'] = ResolversParentTypes['QuerySearchShowsItemsShowLinksSelf']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItems'] = ResolversParentTypes['QuerySchedulesItems']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airdate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  airtime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airstamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsRating']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  show?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShow']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsLinks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QuerySchedulesItemsRatingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsRating'] = ResolversParentTypes['QuerySchedulesItemsRating']> = ResolversObject<{
  average?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShow'] = ResolversParentTypes['QuerySchedulesItemsShow']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  averageRuntime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premiered?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  officialSite?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowSchedule']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsRating']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  webChannel?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowWebChannel']>, ParentType, ContextType>;
  dvdCountry?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  externals?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowExternals']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowImage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowLinks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowScheduleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShowSchedule'] = ResolversParentTypes['QuerySchedulesItemsShowSchedule']> = ResolversObject<{
  time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  days?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowWebChannelResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShowWebChannel'] = ResolversParentTypes['QuerySchedulesItemsShowWebChannel']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowWebChannelCountry']>, ParentType, ContextType>;
  officialSite?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowWebChannelCountryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShowWebChannelCountry'] = ResolversParentTypes['QuerySchedulesItemsShowWebChannelCountry']> = ResolversObject<{
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowExternalsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShowExternals'] = ResolversParentTypes['QuerySchedulesItemsShowExternals']> = ResolversObject<{
  tvrage?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  thetvdb?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imdb?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsShowLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsShowLinks'] = ResolversParentTypes['QuerySchedulesItemsShowLinks']> = ResolversObject<{
  self?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  previousepisode?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  nextepisode?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QuerySchedulesItemsLinksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QuerySchedulesItemsLinks'] = ResolversParentTypes['QuerySchedulesItemsLinks']> = ResolversObject<{
  self?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowLinksSelf']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryWebStreamingSchedulesItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryWebStreamingSchedulesItems'] = ResolversParentTypes['QueryWebStreamingSchedulesItems']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airdate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  airtime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airstamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsRating']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsLinks']>, ParentType, ContextType>;
  embedded?: Resolver<Maybe<ResolversTypes['QueryWebStreamingSchedulesItemsEmbedded']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryWebStreamingSchedulesItemsEmbeddedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryWebStreamingSchedulesItemsEmbedded'] = ResolversParentTypes['QueryWebStreamingSchedulesItemsEmbedded']> = ResolversObject<{
  show?: Resolver<Maybe<ResolversTypes['QueryWebStreamingSchedulesItemsEmbeddedShow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryWebStreamingSchedulesItemsEmbeddedShowResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryWebStreamingSchedulesItemsEmbeddedShow'] = ResolversParentTypes['QueryWebStreamingSchedulesItemsEmbeddedShow']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  averageRuntime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  premiered?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  ended?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  officialSite?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  schedule?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowSchedule']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsRating']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  network?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowWebChannel']>, ParentType, ContextType>;
  webChannel?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowWebChannel']>, ParentType, ContextType>;
  dvdCountry?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  externals?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowExternals']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['QuerySearchShowsItemsShowImage']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsShowLinks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryFullScheduleItemsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['QueryFullScheduleItems'] = ResolversParentTypes['QueryFullScheduleItems']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airdate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  airtime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airstamp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rating?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsRating']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  summary?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType>;
  links?: Resolver<Maybe<ResolversTypes['QuerySchedulesItemsLinks']>, ParentType, ContextType>;
  embedded?: Resolver<Maybe<ResolversTypes['QueryWebStreamingSchedulesItemsEmbedded']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullScheduleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FullSchedule'] = ResolversParentTypes['FullSchedule']> = ResolversObject<{
  schedule?: Resolver<Maybe<ResolversTypes['FullScheduleConnection']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullScheduleConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FullScheduleConnection'] = ResolversParentTypes['FullScheduleConnection']> = ResolversObject<{
  edges?: Resolver<Array<ResolversTypes['FullScheduleEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FullScheduleEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FullScheduleEdge'] = ResolversParentTypes['FullScheduleEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['QueryFullScheduleItems'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  endCursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  QuerySearchShowsItems?: QuerySearchShowsItemsResolvers<ContextType>;
  QuerySearchShowsItemsShow?: QuerySearchShowsItemsShowResolvers<ContextType>;
  URL?: GraphQLScalarType;
  Void?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  QuerySearchShowsItemsShowSchedule?: QuerySearchShowsItemsShowScheduleResolvers<ContextType>;
  QuerySearchShowsItemsShowRating?: QuerySearchShowsItemsShowRatingResolvers<ContextType>;
  QuerySearchShowsItemsShowWebChannel?: QuerySearchShowsItemsShowWebChannelResolvers<ContextType>;
  QuerySearchShowsItemsShowExternals?: QuerySearchShowsItemsShowExternalsResolvers<ContextType>;
  QuerySearchShowsItemsShowImage?: QuerySearchShowsItemsShowImageResolvers<ContextType>;
  QuerySearchShowsItemsShowLinks?: QuerySearchShowsItemsShowLinksResolvers<ContextType>;
  QuerySearchShowsItemsShowLinksSelf?: QuerySearchShowsItemsShowLinksSelfResolvers<ContextType>;
  QuerySchedulesItems?: QuerySchedulesItemsResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  QuerySchedulesItemsRating?: QuerySchedulesItemsRatingResolvers<ContextType>;
  QuerySchedulesItemsShow?: QuerySchedulesItemsShowResolvers<ContextType>;
  QuerySchedulesItemsShowSchedule?: QuerySchedulesItemsShowScheduleResolvers<ContextType>;
  QuerySchedulesItemsShowWebChannel?: QuerySchedulesItemsShowWebChannelResolvers<ContextType>;
  QuerySchedulesItemsShowWebChannelCountry?: QuerySchedulesItemsShowWebChannelCountryResolvers<ContextType>;
  QuerySchedulesItemsShowExternals?: QuerySchedulesItemsShowExternalsResolvers<ContextType>;
  QuerySchedulesItemsShowLinks?: QuerySchedulesItemsShowLinksResolvers<ContextType>;
  QuerySchedulesItemsLinks?: QuerySchedulesItemsLinksResolvers<ContextType>;
  QueryWebStreamingSchedulesItems?: QueryWebStreamingSchedulesItemsResolvers<ContextType>;
  QueryWebStreamingSchedulesItemsEmbedded?: QueryWebStreamingSchedulesItemsEmbeddedResolvers<ContextType>;
  QueryWebStreamingSchedulesItemsEmbeddedShow?: QueryWebStreamingSchedulesItemsEmbeddedShowResolvers<ContextType>;
  QueryFullScheduleItems?: QueryFullScheduleItemsResolvers<ContextType>;
  FullSchedule?: FullScheduleResolvers<ContextType>;
  FullScheduleConnection?: FullScheduleConnectionResolvers<ContextType>;
  FullScheduleEdge?: FullScheduleEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace TvMazeTypes {
      export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: any;
  /** Represents empty values */
  Void: any;
  /** Represents date values */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type Query = {
  searchShows?: Maybe<Array<Maybe<QuerySearchShowsItems>>>;
  schedules?: Maybe<Array<Maybe<QuerySchedulesItems>>>;
  webStreamingSchedules?: Maybe<Array<Maybe<QueryWebStreamingSchedulesItems>>>;
  fullSchedule?: Maybe<FullScheduleConnection>;
};


export type QuerysearchShowsArgs = {
  query?: InputMaybe<Scalars['ID']>;
};


export type QueryschedulesArgs = {
  countryIso?: InputMaybe<Scalars['ID']>;
  dateIso?: InputMaybe<Scalars['ID']>;
};


export type QuerywebStreamingSchedulesArgs = {
  dateIso?: InputMaybe<Scalars['ID']>;
  countryIso?: InputMaybe<Scalars['ID']>;
};

export type QuerySearchShowsItems = {
  score?: Maybe<Scalars['Float']>;
  show?: Maybe<QuerySearchShowsItemsShow>;
};

export type QuerySearchShowsItemsShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Void']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySearchShowsItemsShowSchedule>;
  rating?: Maybe<QuerySearchShowsItemsShowRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['Void']>;
  webChannel?: Maybe<QuerySearchShowsItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySearchShowsItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySearchShowsItemsShowLinks>;
};

export type QuerySearchShowsItemsShowSchedule = {
  time?: Maybe<Scalars['String']>;
  days?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuerySearchShowsItemsShowRating = {
  average?: Maybe<Scalars['Float']>;
};

export type QuerySearchShowsItemsShowWebChannel = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
};

export type QuerySearchShowsItemsShowExternals = {
  tvrage?: Maybe<Scalars['Void']>;
  thetvdb?: Maybe<Scalars['Int']>;
  imdb?: Maybe<Scalars['String']>;
};

export type QuerySearchShowsItemsShowImage = {
  medium?: Maybe<Scalars['URL']>;
  original?: Maybe<Scalars['URL']>;
};

export type QuerySearchShowsItemsShowLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  previousepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QuerySearchShowsItemsShowLinksSelf = {
  href?: Maybe<Scalars['URL']>;
};

export type QuerySchedulesItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['Void']>;
  show?: Maybe<QuerySchedulesItemsShow>;
  links?: Maybe<QuerySchedulesItemsLinks>;
};

export type QuerySchedulesItemsRating = {
  average?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySchedulesItemsShowSchedule>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<Scalars['Void']>;
  webChannel?: Maybe<QuerySchedulesItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySchedulesItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySchedulesItemsShowLinks>;
};

export type QuerySchedulesItemsShowSchedule = {
  time?: Maybe<Scalars['String']>;
  days?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuerySchedulesItemsShowWebChannel = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  country?: Maybe<QuerySchedulesItemsShowWebChannelCountry>;
  officialSite?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShowWebChannelCountry = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
};

export type QuerySchedulesItemsShowExternals = {
  tvrage?: Maybe<Scalars['Void']>;
  thetvdb?: Maybe<Scalars['Int']>;
  imdb?: Maybe<Scalars['Void']>;
};

export type QuerySchedulesItemsShowLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  previousepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
  nextepisode?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QuerySchedulesItemsLinks = {
  self?: Maybe<QuerySearchShowsItemsShowLinksSelf>;
};

export type QueryWebStreamingSchedulesItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['String']>;
  links?: Maybe<QuerySchedulesItemsLinks>;
  embedded?: Maybe<QueryWebStreamingSchedulesItemsEmbedded>;
};

export type QueryWebStreamingSchedulesItemsEmbedded = {
  show?: Maybe<QueryWebStreamingSchedulesItemsEmbeddedShow>;
};

export type QueryWebStreamingSchedulesItemsEmbeddedShow = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  genres?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  runtime?: Maybe<Scalars['Int']>;
  averageRuntime?: Maybe<Scalars['Int']>;
  premiered?: Maybe<Scalars['Date']>;
  ended?: Maybe<Scalars['Void']>;
  officialSite?: Maybe<Scalars['URL']>;
  schedule?: Maybe<QuerySchedulesItemsShowSchedule>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  weight?: Maybe<Scalars['Int']>;
  network?: Maybe<QuerySchedulesItemsShowWebChannel>;
  webChannel?: Maybe<QuerySchedulesItemsShowWebChannel>;
  dvdCountry?: Maybe<Scalars['Void']>;
  externals?: Maybe<QuerySearchShowsItemsShowExternals>;
  image?: Maybe<QuerySearchShowsItemsShowImage>;
  summary?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['Int']>;
  links?: Maybe<QuerySchedulesItemsShowLinks>;
};

export type QueryFullScheduleItems = {
  id?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['URL']>;
  name?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
  airdate?: Maybe<Scalars['Date']>;
  airtime?: Maybe<Scalars['String']>;
  airstamp?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Int']>;
  rating?: Maybe<QuerySchedulesItemsRating>;
  image?: Maybe<Scalars['Void']>;
  summary?: Maybe<Scalars['Void']>;
  links?: Maybe<QuerySchedulesItemsLinks>;
  embedded?: Maybe<QueryWebStreamingSchedulesItemsEmbedded>;
};

export type FullSchedule = {
  schedule?: Maybe<FullScheduleConnection>;
};

export type FullScheduleConnection = {
  edges: Array<FullScheduleEdge>;
  pageInfo: PageInfo;
};

export type FullScheduleEdge = {
  cursor: Scalars['String'];
  node: QueryFullScheduleItems;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
  endCursor: Scalars['String'];
};

    }
    export type QueryTvMazeSdk = {
  /** undefined **/
  searchShows: InContextSdkMethod<TvMazeTypes.Query['searchShows'], TvMazeTypes.QuerysearchShowsArgs, MeshContext>,
  /** undefined **/
  schedules: InContextSdkMethod<TvMazeTypes.Query['schedules'], TvMazeTypes.QueryschedulesArgs, MeshContext>,
  /** undefined **/
  webStreamingSchedules: InContextSdkMethod<TvMazeTypes.Query['webStreamingSchedules'], TvMazeTypes.QuerywebStreamingSchedulesArgs, MeshContext>,
  /** undefined **/
  fullSchedule: InContextSdkMethod<TvMazeTypes.Query['fullSchedule'], {}, MeshContext>
};

export type MutationTvMazeSdk = {

};

export type SubscriptionTvMazeSdk = {

};

export type TvMazeContext = {
      ["TV Maze"]: { Query: QueryTvMazeSdk, Mutation: MutationTvMazeSdk, Subscription: SubscriptionTvMazeSdk },
      
    };

export type MeshContext = TvMazeContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});


                import { findAndParseConfig } from '@graphql-mesh/cli';
                function getMeshOptions() {
                  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
                  return findAndParseConfig({
                    dir: baseDir,
                    artifactsDir: ".mesh",
                    configName: "mesh",
                    additionalPackagePrefixes: [],
                    initialLoggerPrefix: "🕸️  Mesh",
                  });
                }
              

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltMesh(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));