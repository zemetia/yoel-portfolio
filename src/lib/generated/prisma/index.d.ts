
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Publication
 * 
 */
export type Publication = $Result.DefaultSelection<Prisma.$PublicationPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model VolunteerExperience
 * 
 */
export type VolunteerExperience = $Result.DefaultSelection<Prisma.$VolunteerExperiencePayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PublishStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]

}

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publication`: Exposes CRUD operations for the **Publication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publications
    * const publications = await prisma.publication.findMany()
    * ```
    */
  get publication(): Prisma.PublicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerExperience`: Exposes CRUD operations for the **VolunteerExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerExperiences
    * const volunteerExperiences = await prisma.volunteerExperience.findMany()
    * ```
    */
  get volunteerExperience(): Prisma.VolunteerExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Skill: 'Skill',
    Education: 'Education',
    Experience: 'Experience',
    Project: 'Project',
    Publication: 'Publication',
    License: 'License',
    VolunteerExperience: 'VolunteerExperience',
    Organization: 'Organization',
    Contact: 'Contact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "skill" | "education" | "experience" | "project" | "publication" | "license" | "volunteerExperience" | "organization" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Publication: {
        payload: Prisma.$PublicationPayload<ExtArgs>
        fields: Prisma.PublicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findFirst: {
            args: Prisma.PublicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          findMany: {
            args: Prisma.PublicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          create: {
            args: Prisma.PublicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          createMany: {
            args: Prisma.PublicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          delete: {
            args: Prisma.PublicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          update: {
            args: Prisma.PublicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          deleteMany: {
            args: Prisma.PublicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>[]
          }
          upsert: {
            args: Prisma.PublicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicationPayload>
          }
          aggregate: {
            args: Prisma.PublicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublication>
          }
          groupBy: {
            args: Prisma.PublicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicationCountArgs<ExtArgs>
            result: $Utils.Optional<PublicationCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      VolunteerExperience: {
        payload: Prisma.$VolunteerExperiencePayload<ExtArgs>
        fields: Prisma.VolunteerExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          findFirst: {
            args: Prisma.VolunteerExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          findMany: {
            args: Prisma.VolunteerExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>[]
          }
          create: {
            args: Prisma.VolunteerExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          createMany: {
            args: Prisma.VolunteerExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>[]
          }
          delete: {
            args: Prisma.VolunteerExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          update: {
            args: Prisma.VolunteerExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          deleteMany: {
            args: Prisma.VolunteerExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>[]
          }
          upsert: {
            args: Prisma.VolunteerExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerExperiencePayload>
          }
          aggregate: {
            args: Prisma.VolunteerExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerExperience>
          }
          groupBy: {
            args: Prisma.VolunteerExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerExperienceCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    skill?: SkillOmit
    education?: EducationOmit
    experience?: ExperienceOmit
    project?: ProjectOmit
    publication?: PublicationOmit
    license?: LicenseOmit
    volunteerExperience?: VolunteerExperienceOmit
    organization?: OrganizationOmit
    contact?: ContactOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    skills: number
    education: number
    experience: number
    projects: number
    publications: number
    licenses: number
    volunteerExp: number
    organizations: number
    contacts: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | ProfileCountOutputTypeCountSkillsArgs
    education?: boolean | ProfileCountOutputTypeCountEducationArgs
    experience?: boolean | ProfileCountOutputTypeCountExperienceArgs
    projects?: boolean | ProfileCountOutputTypeCountProjectsArgs
    publications?: boolean | ProfileCountOutputTypeCountPublicationsArgs
    licenses?: boolean | ProfileCountOutputTypeCountLicensesArgs
    volunteerExp?: boolean | ProfileCountOutputTypeCountVolunteerExpArgs
    organizations?: boolean | ProfileCountOutputTypeCountOrganizationsArgs
    contacts?: boolean | ProfileCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountPublicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountVolunteerExpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerExperienceWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountOrganizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    slug: string | null
    fullName: string | null
    headline: string | null
    summary: string | null
    location: string | null
    phone: string | null
    email: string | null
    birthDate: Date | null
    website: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    instagramUrl: string | null
    tiktokUrl: string | null
    facebookUrl: string | null
    youtubeUrl: string | null
    mediumUrl: string | null
    avatarUrl: string | null
    resumeUrl: string | null
    heroSubtitle: string | null
    activeTheme: string | null
    showPhoto: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    fullName: string | null
    headline: string | null
    summary: string | null
    location: string | null
    phone: string | null
    email: string | null
    birthDate: Date | null
    website: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    instagramUrl: string | null
    tiktokUrl: string | null
    facebookUrl: string | null
    youtubeUrl: string | null
    mediumUrl: string | null
    avatarUrl: string | null
    resumeUrl: string | null
    heroSubtitle: string | null
    activeTheme: string | null
    showPhoto: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    slug: number
    fullName: number
    headline: number
    summary: number
    location: number
    phone: number
    email: number
    birthDate: number
    website: number
    linkedinUrl: number
    githubUrl: number
    twitterUrl: number
    instagramUrl: number
    tiktokUrl: number
    facebookUrl: number
    youtubeUrl: number
    mediumUrl: number
    avatarUrl: number
    resumeUrl: number
    heroSubtitle: number
    heroSequences: number
    visibleSections: number
    activeTheme: number
    showPhoto: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    slug?: true
    fullName?: true
    headline?: true
    summary?: true
    location?: true
    phone?: true
    email?: true
    birthDate?: true
    website?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    instagramUrl?: true
    tiktokUrl?: true
    facebookUrl?: true
    youtubeUrl?: true
    mediumUrl?: true
    avatarUrl?: true
    resumeUrl?: true
    heroSubtitle?: true
    activeTheme?: true
    showPhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    slug?: true
    fullName?: true
    headline?: true
    summary?: true
    location?: true
    phone?: true
    email?: true
    birthDate?: true
    website?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    instagramUrl?: true
    tiktokUrl?: true
    facebookUrl?: true
    youtubeUrl?: true
    mediumUrl?: true
    avatarUrl?: true
    resumeUrl?: true
    heroSubtitle?: true
    activeTheme?: true
    showPhoto?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    slug?: true
    fullName?: true
    headline?: true
    summary?: true
    location?: true
    phone?: true
    email?: true
    birthDate?: true
    website?: true
    linkedinUrl?: true
    githubUrl?: true
    twitterUrl?: true
    instagramUrl?: true
    tiktokUrl?: true
    facebookUrl?: true
    youtubeUrl?: true
    mediumUrl?: true
    avatarUrl?: true
    resumeUrl?: true
    heroSubtitle?: true
    heroSequences?: true
    visibleSections?: true
    activeTheme?: true
    showPhoto?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    slug: string
    fullName: string
    headline: string
    summary: string
    location: string
    phone: string
    email: string
    birthDate: Date | null
    website: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    twitterUrl: string | null
    instagramUrl: string | null
    tiktokUrl: string | null
    facebookUrl: string | null
    youtubeUrl: string | null
    mediumUrl: string | null
    avatarUrl: string | null
    resumeUrl: string | null
    heroSubtitle: string | null
    heroSequences: JsonValue | null
    visibleSections: string[]
    activeTheme: string | null
    showPhoto: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    fullName?: boolean
    headline?: boolean
    summary?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    website?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    instagramUrl?: boolean
    tiktokUrl?: boolean
    facebookUrl?: boolean
    youtubeUrl?: boolean
    mediumUrl?: boolean
    avatarUrl?: boolean
    resumeUrl?: boolean
    heroSubtitle?: boolean
    heroSequences?: boolean
    visibleSections?: boolean
    activeTheme?: boolean
    showPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    education?: boolean | Profile$educationArgs<ExtArgs>
    experience?: boolean | Profile$experienceArgs<ExtArgs>
    projects?: boolean | Profile$projectsArgs<ExtArgs>
    publications?: boolean | Profile$publicationsArgs<ExtArgs>
    licenses?: boolean | Profile$licensesArgs<ExtArgs>
    volunteerExp?: boolean | Profile$volunteerExpArgs<ExtArgs>
    organizations?: boolean | Profile$organizationsArgs<ExtArgs>
    contacts?: boolean | Profile$contactsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    fullName?: boolean
    headline?: boolean
    summary?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    website?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    instagramUrl?: boolean
    tiktokUrl?: boolean
    facebookUrl?: boolean
    youtubeUrl?: boolean
    mediumUrl?: boolean
    avatarUrl?: boolean
    resumeUrl?: boolean
    heroSubtitle?: boolean
    heroSequences?: boolean
    visibleSections?: boolean
    activeTheme?: boolean
    showPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    fullName?: boolean
    headline?: boolean
    summary?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    website?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    instagramUrl?: boolean
    tiktokUrl?: boolean
    facebookUrl?: boolean
    youtubeUrl?: boolean
    mediumUrl?: boolean
    avatarUrl?: boolean
    resumeUrl?: boolean
    heroSubtitle?: boolean
    heroSequences?: boolean
    visibleSections?: boolean
    activeTheme?: boolean
    showPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    slug?: boolean
    fullName?: boolean
    headline?: boolean
    summary?: boolean
    location?: boolean
    phone?: boolean
    email?: boolean
    birthDate?: boolean
    website?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    twitterUrl?: boolean
    instagramUrl?: boolean
    tiktokUrl?: boolean
    facebookUrl?: boolean
    youtubeUrl?: boolean
    mediumUrl?: boolean
    avatarUrl?: boolean
    resumeUrl?: boolean
    heroSubtitle?: boolean
    heroSequences?: boolean
    visibleSections?: boolean
    activeTheme?: boolean
    showPhoto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "fullName" | "headline" | "summary" | "location" | "phone" | "email" | "birthDate" | "website" | "linkedinUrl" | "githubUrl" | "twitterUrl" | "instagramUrl" | "tiktokUrl" | "facebookUrl" | "youtubeUrl" | "mediumUrl" | "avatarUrl" | "resumeUrl" | "heroSubtitle" | "heroSequences" | "visibleSections" | "activeTheme" | "showPhoto" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | Profile$skillsArgs<ExtArgs>
    education?: boolean | Profile$educationArgs<ExtArgs>
    experience?: boolean | Profile$experienceArgs<ExtArgs>
    projects?: boolean | Profile$projectsArgs<ExtArgs>
    publications?: boolean | Profile$publicationsArgs<ExtArgs>
    licenses?: boolean | Profile$licensesArgs<ExtArgs>
    volunteerExp?: boolean | Profile$volunteerExpArgs<ExtArgs>
    organizations?: boolean | Profile$organizationsArgs<ExtArgs>
    contacts?: boolean | Profile$contactsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      skills: Prisma.$SkillPayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      publications: Prisma.$PublicationPayload<ExtArgs>[]
      licenses: Prisma.$LicensePayload<ExtArgs>[]
      volunteerExp: Prisma.$VolunteerExperiencePayload<ExtArgs>[]
      organizations: Prisma.$OrganizationPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      fullName: string
      headline: string
      summary: string
      location: string
      phone: string
      email: string
      birthDate: Date | null
      website: string | null
      linkedinUrl: string | null
      githubUrl: string | null
      twitterUrl: string | null
      instagramUrl: string | null
      tiktokUrl: string | null
      facebookUrl: string | null
      youtubeUrl: string | null
      mediumUrl: string | null
      avatarUrl: string | null
      resumeUrl: string | null
      heroSubtitle: string | null
      heroSequences: Prisma.JsonValue | null
      visibleSections: string[]
      activeTheme: string | null
      showPhoto: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    skills<T extends Profile$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends Profile$educationArgs<ExtArgs> = {}>(args?: Subset<T, Profile$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experience<T extends Profile$experienceArgs<ExtArgs> = {}>(args?: Subset<T, Profile$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Profile$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    publications<T extends Profile$publicationsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$publicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenses<T extends Profile$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    volunteerExp<T extends Profile$volunteerExpArgs<ExtArgs> = {}>(args?: Subset<T, Profile$volunteerExpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    organizations<T extends Profile$organizationsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$organizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Profile$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly slug: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly headline: FieldRef<"Profile", 'String'>
    readonly summary: FieldRef<"Profile", 'String'>
    readonly location: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly birthDate: FieldRef<"Profile", 'DateTime'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly linkedinUrl: FieldRef<"Profile", 'String'>
    readonly githubUrl: FieldRef<"Profile", 'String'>
    readonly twitterUrl: FieldRef<"Profile", 'String'>
    readonly instagramUrl: FieldRef<"Profile", 'String'>
    readonly tiktokUrl: FieldRef<"Profile", 'String'>
    readonly facebookUrl: FieldRef<"Profile", 'String'>
    readonly youtubeUrl: FieldRef<"Profile", 'String'>
    readonly mediumUrl: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly resumeUrl: FieldRef<"Profile", 'String'>
    readonly heroSubtitle: FieldRef<"Profile", 'String'>
    readonly heroSequences: FieldRef<"Profile", 'Json'>
    readonly visibleSections: FieldRef<"Profile", 'String[]'>
    readonly activeTheme: FieldRef<"Profile", 'String'>
    readonly showPhoto: FieldRef<"Profile", 'Boolean'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.skills
   */
  export type Profile$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Profile.education
   */
  export type Profile$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Profile.experience
   */
  export type Profile$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Profile.projects
   */
  export type Profile$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Profile.publications
   */
  export type Profile$publicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    cursor?: PublicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Profile.licenses
   */
  export type Profile$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Profile.volunteerExp
   */
  export type Profile$volunteerExpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    where?: VolunteerExperienceWhereInput
    orderBy?: VolunteerExperienceOrderByWithRelationInput | VolunteerExperienceOrderByWithRelationInput[]
    cursor?: VolunteerExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerExperienceScalarFieldEnum | VolunteerExperienceScalarFieldEnum[]
  }

  /**
   * Profile.organizations
   */
  export type Profile$organizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    cursor?: OrganizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Profile.contacts
   */
  export type Profile$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    proficiency: number | null
    order: number | null
  }

  export type SkillSumAggregateOutputType = {
    proficiency: number | null
    order: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    list: string | null
    category: string | null
    proficiency: number | null
    iconSlug: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    list: string | null
    category: string | null
    proficiency: number | null
    iconSlug: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    profileId: number
    name: number
    list: number
    category: number
    proficiency: number
    iconSlug: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    proficiency?: true
    order?: true
  }

  export type SkillSumAggregateInputType = {
    proficiency?: true
    order?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    list?: true
    category?: true
    proficiency?: true
    iconSlug?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    list?: true
    category?: true
    proficiency?: true
    iconSlug?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    list?: true
    category?: true
    proficiency?: true
    iconSlug?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    profileId: string
    name: string
    list: string | null
    category: string | null
    proficiency: number | null
    iconSlug: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    list?: boolean
    category?: boolean
    proficiency?: boolean
    iconSlug?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    list?: boolean
    category?: boolean
    proficiency?: boolean
    iconSlug?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    list?: boolean
    category?: boolean
    proficiency?: boolean
    iconSlug?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    profileId?: boolean
    name?: boolean
    list?: boolean
    category?: boolean
    proficiency?: boolean
    iconSlug?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "name" | "list" | "category" | "proficiency" | "iconSlug" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      name: string
      list: string | null
      category: string | null
      proficiency: number | null
      iconSlug: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly profileId: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly list: FieldRef<"Skill", 'String'>
    readonly category: FieldRef<"Skill", 'String'>
    readonly proficiency: FieldRef<"Skill", 'Int'>
    readonly iconSlug: FieldRef<"Skill", 'String'>
    readonly order: FieldRef<"Skill", 'Int'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    gpa: string | null
    description: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    institution: string | null
    degree: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    gpa: string | null
    description: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    profileId: number
    institution: number
    degree: number
    field: number
    startDate: number
    endDate: number
    isCurrent: number
    gpa: number
    description: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    profileId?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    gpa?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    profileId?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    gpa?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    profileId?: true
    institution?: true
    degree?: true
    field?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    gpa?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    profileId: string
    institution: string
    degree: string | null
    field: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean
    gpa: string | null
    description: string | null
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    gpa?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    gpa?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    gpa?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    profileId?: boolean
    institution?: boolean
    degree?: boolean
    field?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    gpa?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "institution" | "degree" | "field" | "startDate" | "endDate" | "isCurrent" | "gpa" | "description" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      institution: string
      degree: string | null
      field: string | null
      startDate: Date | null
      endDate: Date | null
      isCurrent: boolean
      gpa: string | null
      description: string | null
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly profileId: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly field: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly isCurrent: FieldRef<"Education", 'Boolean'>
    readonly gpa: FieldRef<"Education", 'String'>
    readonly description: FieldRef<"Education", 'String'>
    readonly logoUrl: FieldRef<"Education", 'String'>
    readonly createdAt: FieldRef<"Education", 'DateTime'>
    readonly updatedAt: FieldRef<"Education", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    order: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    order: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    company: string | null
    position: string | null
    location: string | null
    locationType: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    companyUrl: string | null
    companyLogo: string | null
    employmentType: string | null
    aiHint: string | null
    isPublic: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    company: string | null
    position: string | null
    location: string | null
    locationType: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    companyUrl: string | null
    companyLogo: string | null
    employmentType: string | null
    aiHint: string | null
    isPublic: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    profileId: number
    company: number
    position: number
    location: number
    locationType: number
    startDate: number
    endDate: number
    isCurrent: number
    description: number
    achievements: number
    companyUrl: number
    companyLogo: number
    employmentType: number
    images: number
    aiHint: number
    isPublic: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    order?: true
  }

  export type ExperienceSumAggregateInputType = {
    order?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    profileId?: true
    company?: true
    position?: true
    location?: true
    locationType?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    companyUrl?: true
    companyLogo?: true
    employmentType?: true
    aiHint?: true
    isPublic?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    profileId?: true
    company?: true
    position?: true
    location?: true
    locationType?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    companyUrl?: true
    companyLogo?: true
    employmentType?: true
    aiHint?: true
    isPublic?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    profileId?: true
    company?: true
    position?: true
    location?: true
    locationType?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    achievements?: true
    companyUrl?: true
    companyLogo?: true
    employmentType?: true
    images?: true
    aiHint?: true
    isPublic?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    profileId: string
    company: string
    position: string
    location: string | null
    locationType: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean
    description: string | null
    achievements: string[]
    companyUrl: string | null
    companyLogo: string | null
    employmentType: string | null
    images: string[]
    aiHint: string | null
    isPublic: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    company?: boolean
    position?: boolean
    location?: boolean
    locationType?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    employmentType?: boolean
    images?: boolean
    aiHint?: boolean
    isPublic?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    company?: boolean
    position?: boolean
    location?: boolean
    locationType?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    employmentType?: boolean
    images?: boolean
    aiHint?: boolean
    isPublic?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    company?: boolean
    position?: boolean
    location?: boolean
    locationType?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    employmentType?: boolean
    images?: boolean
    aiHint?: boolean
    isPublic?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    profileId?: boolean
    company?: boolean
    position?: boolean
    location?: boolean
    locationType?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    companyUrl?: boolean
    companyLogo?: boolean
    employmentType?: boolean
    images?: boolean
    aiHint?: boolean
    isPublic?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "company" | "position" | "location" | "locationType" | "startDate" | "endDate" | "isCurrent" | "description" | "achievements" | "companyUrl" | "companyLogo" | "employmentType" | "images" | "aiHint" | "isPublic" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      company: string
      position: string
      location: string | null
      locationType: string | null
      startDate: Date | null
      endDate: Date | null
      isCurrent: boolean
      description: string | null
      achievements: string[]
      companyUrl: string | null
      companyLogo: string | null
      employmentType: string | null
      images: string[]
      aiHint: string | null
      isPublic: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly profileId: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly position: FieldRef<"Experience", 'String'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly locationType: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly isCurrent: FieldRef<"Experience", 'Boolean'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly achievements: FieldRef<"Experience", 'String[]'>
    readonly companyUrl: FieldRef<"Experience", 'String'>
    readonly companyLogo: FieldRef<"Experience", 'String'>
    readonly employmentType: FieldRef<"Experience", 'String'>
    readonly images: FieldRef<"Experience", 'String[]'>
    readonly aiHint: FieldRef<"Experience", 'String'>
    readonly isPublic: FieldRef<"Experience", 'Boolean'>
    readonly order: FieldRef<"Experience", 'Int'>
    readonly createdAt: FieldRef<"Experience", 'DateTime'>
    readonly updatedAt: FieldRef<"Experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    year: number | null
    order: number | null
  }

  export type ProjectSumAggregateOutputType = {
    year: number | null
    order: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    title: string | null
    slug: string | null
    summary: string | null
    description: string | null
    coverImage: string | null
    liveUrl: string | null
    githubUrl: string | null
    projectUrl: string | null
    caseStudyUrl: string | null
    year: number | null
    client: string | null
    industry: string | null
    duration: string | null
    isFeatured: boolean | null
    status: $Enums.PublishStatus | null
    aiHint: string | null
    publishedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    title: string | null
    slug: string | null
    summary: string | null
    description: string | null
    coverImage: string | null
    liveUrl: string | null
    githubUrl: string | null
    projectUrl: string | null
    caseStudyUrl: string | null
    year: number | null
    client: string | null
    industry: string | null
    duration: string | null
    isFeatured: boolean | null
    status: $Enums.PublishStatus | null
    aiHint: string | null
    publishedAt: Date | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    profileId: number
    title: number
    slug: number
    summary: number
    description: number
    coverImage: number
    gallery: number
    body: number
    liveUrl: number
    githubUrl: number
    projectUrl: number
    caseStudyUrl: number
    year: number
    tags: number
    images: number
    collaborators: number
    client: number
    industry: number
    duration: number
    servicesProvided: number
    techStack: number
    isFeatured: number
    status: number
    aiHint: number
    publishedAt: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    year?: true
    order?: true
  }

  export type ProjectSumAggregateInputType = {
    year?: true
    order?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    slug?: true
    summary?: true
    description?: true
    coverImage?: true
    liveUrl?: true
    githubUrl?: true
    projectUrl?: true
    caseStudyUrl?: true
    year?: true
    client?: true
    industry?: true
    duration?: true
    isFeatured?: true
    status?: true
    aiHint?: true
    publishedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    slug?: true
    summary?: true
    description?: true
    coverImage?: true
    liveUrl?: true
    githubUrl?: true
    projectUrl?: true
    caseStudyUrl?: true
    year?: true
    client?: true
    industry?: true
    duration?: true
    isFeatured?: true
    status?: true
    aiHint?: true
    publishedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    slug?: true
    summary?: true
    description?: true
    coverImage?: true
    gallery?: true
    body?: true
    liveUrl?: true
    githubUrl?: true
    projectUrl?: true
    caseStudyUrl?: true
    year?: true
    tags?: true
    images?: true
    collaborators?: true
    client?: true
    industry?: true
    duration?: true
    servicesProvided?: true
    techStack?: true
    isFeatured?: true
    status?: true
    aiHint?: true
    publishedAt?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    profileId: string
    title: string
    slug: string
    summary: string | null
    description: string | null
    coverImage: string | null
    gallery: JsonValue | null
    body: JsonValue | null
    liveUrl: string | null
    githubUrl: string | null
    projectUrl: string | null
    caseStudyUrl: string | null
    year: number | null
    tags: string[]
    images: string[]
    collaborators: string[]
    client: string | null
    industry: string | null
    duration: string | null
    servicesProvided: string[]
    techStack: string[]
    isFeatured: boolean
    status: $Enums.PublishStatus
    aiHint: string | null
    publishedAt: Date | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    body?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    projectUrl?: boolean
    caseStudyUrl?: boolean
    year?: boolean
    tags?: boolean
    images?: boolean
    collaborators?: boolean
    client?: boolean
    industry?: boolean
    duration?: boolean
    servicesProvided?: boolean
    techStack?: boolean
    isFeatured?: boolean
    status?: boolean
    aiHint?: boolean
    publishedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    body?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    projectUrl?: boolean
    caseStudyUrl?: boolean
    year?: boolean
    tags?: boolean
    images?: boolean
    collaborators?: boolean
    client?: boolean
    industry?: boolean
    duration?: boolean
    servicesProvided?: boolean
    techStack?: boolean
    isFeatured?: boolean
    status?: boolean
    aiHint?: boolean
    publishedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    body?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    projectUrl?: boolean
    caseStudyUrl?: boolean
    year?: boolean
    tags?: boolean
    images?: boolean
    collaborators?: boolean
    client?: boolean
    industry?: boolean
    duration?: boolean
    servicesProvided?: boolean
    techStack?: boolean
    isFeatured?: boolean
    status?: boolean
    aiHint?: boolean
    publishedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    profileId?: boolean
    title?: boolean
    slug?: boolean
    summary?: boolean
    description?: boolean
    coverImage?: boolean
    gallery?: boolean
    body?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    projectUrl?: boolean
    caseStudyUrl?: boolean
    year?: boolean
    tags?: boolean
    images?: boolean
    collaborators?: boolean
    client?: boolean
    industry?: boolean
    duration?: boolean
    servicesProvided?: boolean
    techStack?: boolean
    isFeatured?: boolean
    status?: boolean
    aiHint?: boolean
    publishedAt?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "title" | "slug" | "summary" | "description" | "coverImage" | "gallery" | "body" | "liveUrl" | "githubUrl" | "projectUrl" | "caseStudyUrl" | "year" | "tags" | "images" | "collaborators" | "client" | "industry" | "duration" | "servicesProvided" | "techStack" | "isFeatured" | "status" | "aiHint" | "publishedAt" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      title: string
      slug: string
      summary: string | null
      description: string | null
      coverImage: string | null
      gallery: Prisma.JsonValue | null
      body: Prisma.JsonValue | null
      liveUrl: string | null
      githubUrl: string | null
      projectUrl: string | null
      caseStudyUrl: string | null
      year: number | null
      tags: string[]
      images: string[]
      collaborators: string[]
      client: string | null
      industry: string | null
      duration: string | null
      servicesProvided: string[]
      techStack: string[]
      isFeatured: boolean
      status: $Enums.PublishStatus
      aiHint: string | null
      publishedAt: Date | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly profileId: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly slug: FieldRef<"Project", 'String'>
    readonly summary: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly coverImage: FieldRef<"Project", 'String'>
    readonly gallery: FieldRef<"Project", 'Json'>
    readonly body: FieldRef<"Project", 'Json'>
    readonly liveUrl: FieldRef<"Project", 'String'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly projectUrl: FieldRef<"Project", 'String'>
    readonly caseStudyUrl: FieldRef<"Project", 'String'>
    readonly year: FieldRef<"Project", 'Int'>
    readonly tags: FieldRef<"Project", 'String[]'>
    readonly images: FieldRef<"Project", 'String[]'>
    readonly collaborators: FieldRef<"Project", 'String[]'>
    readonly client: FieldRef<"Project", 'String'>
    readonly industry: FieldRef<"Project", 'String'>
    readonly duration: FieldRef<"Project", 'String'>
    readonly servicesProvided: FieldRef<"Project", 'String[]'>
    readonly techStack: FieldRef<"Project", 'String[]'>
    readonly isFeatured: FieldRef<"Project", 'Boolean'>
    readonly status: FieldRef<"Project", 'PublishStatus'>
    readonly aiHint: FieldRef<"Project", 'String'>
    readonly publishedAt: FieldRef<"Project", 'DateTime'>
    readonly order: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Publication
   */

  export type AggregatePublication = {
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  export type PublicationAvgAggregateOutputType = {
    order: number | null
  }

  export type PublicationSumAggregateOutputType = {
    order: number | null
  }

  export type PublicationMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    title: string | null
    publisher: string | null
    url: string | null
    publishedDate: Date | null
    description: string | null
    doi: string | null
    publicationType: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    title: string | null
    publisher: string | null
    url: string | null
    publishedDate: Date | null
    description: string | null
    doi: string | null
    publicationType: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublicationCountAggregateOutputType = {
    id: number
    profileId: number
    title: number
    publisher: number
    url: number
    publishedDate: number
    description: number
    authors: number
    doi: number
    publicationType: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublicationAvgAggregateInputType = {
    order?: true
  }

  export type PublicationSumAggregateInputType = {
    order?: true
  }

  export type PublicationMinAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    publisher?: true
    url?: true
    publishedDate?: true
    description?: true
    doi?: true
    publicationType?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationMaxAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    publisher?: true
    url?: true
    publishedDate?: true
    description?: true
    doi?: true
    publicationType?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublicationCountAggregateInputType = {
    id?: true
    profileId?: true
    title?: true
    publisher?: true
    url?: true
    publishedDate?: true
    description?: true
    authors?: true
    doi?: true
    publicationType?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publication to aggregate.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publications
    **/
    _count?: true | PublicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicationMaxAggregateInputType
  }

  export type GetPublicationAggregateType<T extends PublicationAggregateArgs> = {
        [P in keyof T & keyof AggregatePublication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublication[P]>
      : GetScalarType<T[P], AggregatePublication[P]>
  }




  export type PublicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicationWhereInput
    orderBy?: PublicationOrderByWithAggregationInput | PublicationOrderByWithAggregationInput[]
    by: PublicationScalarFieldEnum[] | PublicationScalarFieldEnum
    having?: PublicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicationCountAggregateInputType | true
    _avg?: PublicationAvgAggregateInputType
    _sum?: PublicationSumAggregateInputType
    _min?: PublicationMinAggregateInputType
    _max?: PublicationMaxAggregateInputType
  }

  export type PublicationGroupByOutputType = {
    id: string
    profileId: string
    title: string
    publisher: string | null
    url: string | null
    publishedDate: Date | null
    description: string | null
    authors: string[]
    doi: string | null
    publicationType: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: PublicationCountAggregateOutputType | null
    _avg: PublicationAvgAggregateOutputType | null
    _sum: PublicationSumAggregateOutputType | null
    _min: PublicationMinAggregateOutputType | null
    _max: PublicationMaxAggregateOutputType | null
  }

  type GetPublicationGroupByPayload<T extends PublicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicationGroupByOutputType[P]>
            : GetScalarType<T[P], PublicationGroupByOutputType[P]>
        }
      >
    >


  export type PublicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    publisher?: boolean
    url?: boolean
    publishedDate?: boolean
    description?: boolean
    authors?: boolean
    doi?: boolean
    publicationType?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    publisher?: boolean
    url?: boolean
    publishedDate?: boolean
    description?: boolean
    authors?: boolean
    doi?: boolean
    publicationType?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    title?: boolean
    publisher?: boolean
    url?: boolean
    publishedDate?: boolean
    description?: boolean
    authors?: boolean
    doi?: boolean
    publicationType?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publication"]>

  export type PublicationSelectScalar = {
    id?: boolean
    profileId?: boolean
    title?: boolean
    publisher?: boolean
    url?: boolean
    publishedDate?: boolean
    description?: boolean
    authors?: boolean
    doi?: boolean
    publicationType?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "title" | "publisher" | "url" | "publishedDate" | "description" | "authors" | "doi" | "publicationType" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["publication"]>
  export type PublicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PublicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type PublicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $PublicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publication"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      title: string
      publisher: string | null
      url: string | null
      publishedDate: Date | null
      description: string | null
      authors: string[]
      doi: string | null
      publicationType: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publication"]>
    composites: {}
  }

  type PublicationGetPayload<S extends boolean | null | undefined | PublicationDefaultArgs> = $Result.GetResult<Prisma.$PublicationPayload, S>

  type PublicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicationCountAggregateInputType | true
    }

  export interface PublicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publication'], meta: { name: 'Publication' } }
    /**
     * Find zero or one Publication that matches the filter.
     * @param {PublicationFindUniqueArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicationFindUniqueArgs>(args: SelectSubset<T, PublicationFindUniqueArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicationFindUniqueOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicationFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicationFindFirstArgs>(args?: SelectSubset<T, PublicationFindFirstArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindFirstOrThrowArgs} args - Arguments to find a Publication
     * @example
     * // Get one Publication
     * const publication = await prisma.publication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicationFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publications
     * const publications = await prisma.publication.findMany()
     * 
     * // Get first 10 Publications
     * const publications = await prisma.publication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicationWithIdOnly = await prisma.publication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicationFindManyArgs>(args?: SelectSubset<T, PublicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publication.
     * @param {PublicationCreateArgs} args - Arguments to create a Publication.
     * @example
     * // Create one Publication
     * const Publication = await prisma.publication.create({
     *   data: {
     *     // ... data to create a Publication
     *   }
     * })
     * 
     */
    create<T extends PublicationCreateArgs>(args: SelectSubset<T, PublicationCreateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publications.
     * @param {PublicationCreateManyArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicationCreateManyArgs>(args?: SelectSubset<T, PublicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publications and returns the data saved in the database.
     * @param {PublicationCreateManyAndReturnArgs} args - Arguments to create many Publications.
     * @example
     * // Create many Publications
     * const publication = await prisma.publication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicationCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publication.
     * @param {PublicationDeleteArgs} args - Arguments to delete one Publication.
     * @example
     * // Delete one Publication
     * const Publication = await prisma.publication.delete({
     *   where: {
     *     // ... filter to delete one Publication
     *   }
     * })
     * 
     */
    delete<T extends PublicationDeleteArgs>(args: SelectSubset<T, PublicationDeleteArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publication.
     * @param {PublicationUpdateArgs} args - Arguments to update one Publication.
     * @example
     * // Update one Publication
     * const publication = await prisma.publication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicationUpdateArgs>(args: SelectSubset<T, PublicationUpdateArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publications.
     * @param {PublicationDeleteManyArgs} args - Arguments to filter Publications to delete.
     * @example
     * // Delete a few Publications
     * const { count } = await prisma.publication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicationDeleteManyArgs>(args?: SelectSubset<T, PublicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicationUpdateManyArgs>(args: SelectSubset<T, PublicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publications and returns the data updated in the database.
     * @param {PublicationUpdateManyAndReturnArgs} args - Arguments to update many Publications.
     * @example
     * // Update many Publications
     * const publication = await prisma.publication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publications and only return the `id`
     * const publicationWithIdOnly = await prisma.publication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublicationUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publication.
     * @param {PublicationUpsertArgs} args - Arguments to update or create a Publication.
     * @example
     * // Update or create a Publication
     * const publication = await prisma.publication.upsert({
     *   create: {
     *     // ... data to create a Publication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publication we want to update
     *   }
     * })
     */
    upsert<T extends PublicationUpsertArgs>(args: SelectSubset<T, PublicationUpsertArgs<ExtArgs>>): Prisma__PublicationClient<$Result.GetResult<Prisma.$PublicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationCountArgs} args - Arguments to filter Publications to count.
     * @example
     * // Count the number of Publications
     * const count = await prisma.publication.count({
     *   where: {
     *     // ... the filter for the Publications we want to count
     *   }
     * })
    **/
    count<T extends PublicationCountArgs>(
      args?: Subset<T, PublicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicationAggregateArgs>(args: Subset<T, PublicationAggregateArgs>): Prisma.PrismaPromise<GetPublicationAggregateType<T>>

    /**
     * Group by Publication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicationGroupByArgs['orderBy'] }
        : { orderBy?: PublicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publication model
   */
  readonly fields: PublicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Publication model
   */
  interface PublicationFieldRefs {
    readonly id: FieldRef<"Publication", 'String'>
    readonly profileId: FieldRef<"Publication", 'String'>
    readonly title: FieldRef<"Publication", 'String'>
    readonly publisher: FieldRef<"Publication", 'String'>
    readonly url: FieldRef<"Publication", 'String'>
    readonly publishedDate: FieldRef<"Publication", 'DateTime'>
    readonly description: FieldRef<"Publication", 'String'>
    readonly authors: FieldRef<"Publication", 'String[]'>
    readonly doi: FieldRef<"Publication", 'String'>
    readonly publicationType: FieldRef<"Publication", 'String'>
    readonly order: FieldRef<"Publication", 'Int'>
    readonly createdAt: FieldRef<"Publication", 'DateTime'>
    readonly updatedAt: FieldRef<"Publication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Publication findUnique
   */
  export type PublicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findUniqueOrThrow
   */
  export type PublicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication findFirst
   */
  export type PublicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findFirstOrThrow
   */
  export type PublicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publication to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publications.
     */
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication findMany
   */
  export type PublicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter, which Publications to fetch.
     */
    where?: PublicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publications to fetch.
     */
    orderBy?: PublicationOrderByWithRelationInput | PublicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publications.
     */
    cursor?: PublicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publications.
     */
    skip?: number
    distinct?: PublicationScalarFieldEnum | PublicationScalarFieldEnum[]
  }

  /**
   * Publication create
   */
  export type PublicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Publication.
     */
    data: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
  }

  /**
   * Publication createMany
   */
  export type PublicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publication createManyAndReturn
   */
  export type PublicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to create many Publications.
     */
    data: PublicationCreateManyInput | PublicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication update
   */
  export type PublicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Publication.
     */
    data: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
    /**
     * Choose, which Publication to update.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication updateMany
   */
  export type PublicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
  }

  /**
   * Publication updateManyAndReturn
   */
  export type PublicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * The data used to update Publications.
     */
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyInput>
    /**
     * Filter which Publications to update
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Publication upsert
   */
  export type PublicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Publication to update in case it exists.
     */
    where: PublicationWhereUniqueInput
    /**
     * In case the Publication found by the `where` argument doesn't exist, create a new Publication with this data.
     */
    create: XOR<PublicationCreateInput, PublicationUncheckedCreateInput>
    /**
     * In case the Publication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicationUpdateInput, PublicationUncheckedUpdateInput>
  }

  /**
   * Publication delete
   */
  export type PublicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
    /**
     * Filter which Publication to delete.
     */
    where: PublicationWhereUniqueInput
  }

  /**
   * Publication deleteMany
   */
  export type PublicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publications to delete
     */
    where?: PublicationWhereInput
    /**
     * Limit how many Publications to delete.
     */
    limit?: number
  }

  /**
   * Publication without action
   */
  export type PublicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publication
     */
    select?: PublicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publication
     */
    omit?: PublicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicationInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseAvgAggregateOutputType = {
    order: number | null
  }

  export type LicenseSumAggregateOutputType = {
    order: number | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    issuer: string | null
    url: string | null
    issueDate: Date | null
    expiryDate: Date | null
    doesNotExpire: boolean | null
    credentialId: string | null
    credentialUrl: string | null
    logoUrl: string | null
    aiHint: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    issuer: string | null
    url: string | null
    issueDate: Date | null
    expiryDate: Date | null
    doesNotExpire: boolean | null
    credentialId: string | null
    credentialUrl: string | null
    logoUrl: string | null
    aiHint: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    profileId: number
    name: number
    issuer: number
    url: number
    issueDate: number
    expiryDate: number
    doesNotExpire: number
    credentialId: number
    credentialUrl: number
    logoUrl: number
    images: number
    aiHint: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseAvgAggregateInputType = {
    order?: true
  }

  export type LicenseSumAggregateInputType = {
    order?: true
  }

  export type LicenseMinAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    issuer?: true
    url?: true
    issueDate?: true
    expiryDate?: true
    doesNotExpire?: true
    credentialId?: true
    credentialUrl?: true
    logoUrl?: true
    aiHint?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    issuer?: true
    url?: true
    issueDate?: true
    expiryDate?: true
    doesNotExpire?: true
    credentialId?: true
    credentialUrl?: true
    logoUrl?: true
    aiHint?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    issuer?: true
    url?: true
    issueDate?: true
    expiryDate?: true
    doesNotExpire?: true
    credentialId?: true
    credentialUrl?: true
    logoUrl?: true
    images?: true
    aiHint?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _avg?: LicenseAvgAggregateInputType
    _sum?: LicenseSumAggregateInputType
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    profileId: string
    name: string
    issuer: string
    url: string | null
    issueDate: Date | null
    expiryDate: Date | null
    doesNotExpire: boolean
    credentialId: string | null
    credentialUrl: string | null
    logoUrl: string | null
    images: string[]
    aiHint: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    issuer?: boolean
    url?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    doesNotExpire?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    logoUrl?: boolean
    images?: boolean
    aiHint?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    issuer?: boolean
    url?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    doesNotExpire?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    logoUrl?: boolean
    images?: boolean
    aiHint?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    issuer?: boolean
    url?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    doesNotExpire?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    logoUrl?: boolean
    images?: boolean
    aiHint?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    profileId?: boolean
    name?: boolean
    issuer?: boolean
    url?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    doesNotExpire?: boolean
    credentialId?: boolean
    credentialUrl?: boolean
    logoUrl?: boolean
    images?: boolean
    aiHint?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "name" | "issuer" | "url" | "issueDate" | "expiryDate" | "doesNotExpire" | "credentialId" | "credentialUrl" | "logoUrl" | "images" | "aiHint" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      name: string
      issuer: string
      url: string | null
      issueDate: Date | null
      expiryDate: Date | null
      doesNotExpire: boolean
      credentialId: string | null
      credentialUrl: string | null
      logoUrl: string | null
      images: string[]
      aiHint: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly profileId: FieldRef<"License", 'String'>
    readonly name: FieldRef<"License", 'String'>
    readonly issuer: FieldRef<"License", 'String'>
    readonly url: FieldRef<"License", 'String'>
    readonly issueDate: FieldRef<"License", 'DateTime'>
    readonly expiryDate: FieldRef<"License", 'DateTime'>
    readonly doesNotExpire: FieldRef<"License", 'Boolean'>
    readonly credentialId: FieldRef<"License", 'String'>
    readonly credentialUrl: FieldRef<"License", 'String'>
    readonly logoUrl: FieldRef<"License", 'String'>
    readonly images: FieldRef<"License", 'String[]'>
    readonly aiHint: FieldRef<"License", 'String'>
    readonly order: FieldRef<"License", 'Int'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerExperience
   */

  export type AggregateVolunteerExperience = {
    _count: VolunteerExperienceCountAggregateOutputType | null
    _avg: VolunteerExperienceAvgAggregateOutputType | null
    _sum: VolunteerExperienceSumAggregateOutputType | null
    _min: VolunteerExperienceMinAggregateOutputType | null
    _max: VolunteerExperienceMaxAggregateOutputType | null
  }

  export type VolunteerExperienceAvgAggregateOutputType = {
    order: number | null
  }

  export type VolunteerExperienceSumAggregateOutputType = {
    order: number | null
  }

  export type VolunteerExperienceMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    organization: string | null
    role: string | null
    cause: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerExperienceMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    organization: string | null
    role: string | null
    cause: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerExperienceCountAggregateOutputType = {
    id: number
    profileId: number
    organization: number
    role: number
    cause: number
    location: number
    startDate: number
    endDate: number
    isCurrent: number
    description: number
    achievements: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerExperienceAvgAggregateInputType = {
    order?: true
  }

  export type VolunteerExperienceSumAggregateInputType = {
    order?: true
  }

  export type VolunteerExperienceMinAggregateInputType = {
    id?: true
    profileId?: true
    organization?: true
    role?: true
    cause?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerExperienceMaxAggregateInputType = {
    id?: true
    profileId?: true
    organization?: true
    role?: true
    cause?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerExperienceCountAggregateInputType = {
    id?: true
    profileId?: true
    organization?: true
    role?: true
    cause?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    achievements?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerExperience to aggregate.
     */
    where?: VolunteerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerExperiences to fetch.
     */
    orderBy?: VolunteerExperienceOrderByWithRelationInput | VolunteerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerExperiences
    **/
    _count?: true | VolunteerExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerExperienceMaxAggregateInputType
  }

  export type GetVolunteerExperienceAggregateType<T extends VolunteerExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerExperience[P]>
      : GetScalarType<T[P], AggregateVolunteerExperience[P]>
  }




  export type VolunteerExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerExperienceWhereInput
    orderBy?: VolunteerExperienceOrderByWithAggregationInput | VolunteerExperienceOrderByWithAggregationInput[]
    by: VolunteerExperienceScalarFieldEnum[] | VolunteerExperienceScalarFieldEnum
    having?: VolunteerExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerExperienceCountAggregateInputType | true
    _avg?: VolunteerExperienceAvgAggregateInputType
    _sum?: VolunteerExperienceSumAggregateInputType
    _min?: VolunteerExperienceMinAggregateInputType
    _max?: VolunteerExperienceMaxAggregateInputType
  }

  export type VolunteerExperienceGroupByOutputType = {
    id: string
    profileId: string
    organization: string
    role: string
    cause: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean
    description: string | null
    achievements: string[]
    order: number
    createdAt: Date
    updatedAt: Date
    _count: VolunteerExperienceCountAggregateOutputType | null
    _avg: VolunteerExperienceAvgAggregateOutputType | null
    _sum: VolunteerExperienceSumAggregateOutputType | null
    _min: VolunteerExperienceMinAggregateOutputType | null
    _max: VolunteerExperienceMaxAggregateOutputType | null
  }

  type GetVolunteerExperienceGroupByPayload<T extends VolunteerExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerExperienceGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organization?: boolean
    role?: boolean
    cause?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerExperience"]>

  export type VolunteerExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organization?: boolean
    role?: boolean
    cause?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerExperience"]>

  export type VolunteerExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organization?: boolean
    role?: boolean
    cause?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerExperience"]>

  export type VolunteerExperienceSelectScalar = {
    id?: boolean
    profileId?: boolean
    organization?: boolean
    role?: boolean
    cause?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    achievements?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "organization" | "role" | "cause" | "location" | "startDate" | "endDate" | "isCurrent" | "description" | "achievements" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteerExperience"]>
  export type VolunteerExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type VolunteerExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type VolunteerExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $VolunteerExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerExperience"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      organization: string
      role: string
      cause: string | null
      location: string | null
      startDate: Date | null
      endDate: Date | null
      isCurrent: boolean
      description: string | null
      achievements: string[]
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteerExperience"]>
    composites: {}
  }

  type VolunteerExperienceGetPayload<S extends boolean | null | undefined | VolunteerExperienceDefaultArgs> = $Result.GetResult<Prisma.$VolunteerExperiencePayload, S>

  type VolunteerExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerExperienceCountAggregateInputType | true
    }

  export interface VolunteerExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerExperience'], meta: { name: 'VolunteerExperience' } }
    /**
     * Find zero or one VolunteerExperience that matches the filter.
     * @param {VolunteerExperienceFindUniqueArgs} args - Arguments to find a VolunteerExperience
     * @example
     * // Get one VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerExperienceFindUniqueArgs>(args: SelectSubset<T, VolunteerExperienceFindUniqueArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerExperienceFindUniqueOrThrowArgs} args - Arguments to find a VolunteerExperience
     * @example
     * // Get one VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceFindFirstArgs} args - Arguments to find a VolunteerExperience
     * @example
     * // Get one VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerExperienceFindFirstArgs>(args?: SelectSubset<T, VolunteerExperienceFindFirstArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceFindFirstOrThrowArgs} args - Arguments to find a VolunteerExperience
     * @example
     * // Get one VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerExperiences
     * const volunteerExperiences = await prisma.volunteerExperience.findMany()
     * 
     * // Get first 10 VolunteerExperiences
     * const volunteerExperiences = await prisma.volunteerExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerExperienceWithIdOnly = await prisma.volunteerExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerExperienceFindManyArgs>(args?: SelectSubset<T, VolunteerExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerExperience.
     * @param {VolunteerExperienceCreateArgs} args - Arguments to create a VolunteerExperience.
     * @example
     * // Create one VolunteerExperience
     * const VolunteerExperience = await prisma.volunteerExperience.create({
     *   data: {
     *     // ... data to create a VolunteerExperience
     *   }
     * })
     * 
     */
    create<T extends VolunteerExperienceCreateArgs>(args: SelectSubset<T, VolunteerExperienceCreateArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerExperiences.
     * @param {VolunteerExperienceCreateManyArgs} args - Arguments to create many VolunteerExperiences.
     * @example
     * // Create many VolunteerExperiences
     * const volunteerExperience = await prisma.volunteerExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerExperienceCreateManyArgs>(args?: SelectSubset<T, VolunteerExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VolunteerExperiences and returns the data saved in the database.
     * @param {VolunteerExperienceCreateManyAndReturnArgs} args - Arguments to create many VolunteerExperiences.
     * @example
     * // Create many VolunteerExperiences
     * const volunteerExperience = await prisma.volunteerExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VolunteerExperiences and only return the `id`
     * const volunteerExperienceWithIdOnly = await prisma.volunteerExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VolunteerExperience.
     * @param {VolunteerExperienceDeleteArgs} args - Arguments to delete one VolunteerExperience.
     * @example
     * // Delete one VolunteerExperience
     * const VolunteerExperience = await prisma.volunteerExperience.delete({
     *   where: {
     *     // ... filter to delete one VolunteerExperience
     *   }
     * })
     * 
     */
    delete<T extends VolunteerExperienceDeleteArgs>(args: SelectSubset<T, VolunteerExperienceDeleteArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerExperience.
     * @param {VolunteerExperienceUpdateArgs} args - Arguments to update one VolunteerExperience.
     * @example
     * // Update one VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerExperienceUpdateArgs>(args: SelectSubset<T, VolunteerExperienceUpdateArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerExperiences.
     * @param {VolunteerExperienceDeleteManyArgs} args - Arguments to filter VolunteerExperiences to delete.
     * @example
     * // Delete a few VolunteerExperiences
     * const { count } = await prisma.volunteerExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerExperienceDeleteManyArgs>(args?: SelectSubset<T, VolunteerExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerExperiences
     * const volunteerExperience = await prisma.volunteerExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerExperienceUpdateManyArgs>(args: SelectSubset<T, VolunteerExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerExperiences and returns the data updated in the database.
     * @param {VolunteerExperienceUpdateManyAndReturnArgs} args - Arguments to update many VolunteerExperiences.
     * @example
     * // Update many VolunteerExperiences
     * const volunteerExperience = await prisma.volunteerExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VolunteerExperiences and only return the `id`
     * const volunteerExperienceWithIdOnly = await prisma.volunteerExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VolunteerExperience.
     * @param {VolunteerExperienceUpsertArgs} args - Arguments to update or create a VolunteerExperience.
     * @example
     * // Update or create a VolunteerExperience
     * const volunteerExperience = await prisma.volunteerExperience.upsert({
     *   create: {
     *     // ... data to create a VolunteerExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerExperience we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerExperienceUpsertArgs>(args: SelectSubset<T, VolunteerExperienceUpsertArgs<ExtArgs>>): Prisma__VolunteerExperienceClient<$Result.GetResult<Prisma.$VolunteerExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceCountArgs} args - Arguments to filter VolunteerExperiences to count.
     * @example
     * // Count the number of VolunteerExperiences
     * const count = await prisma.volunteerExperience.count({
     *   where: {
     *     // ... the filter for the VolunteerExperiences we want to count
     *   }
     * })
    **/
    count<T extends VolunteerExperienceCountArgs>(
      args?: Subset<T, VolunteerExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerExperienceAggregateArgs>(args: Subset<T, VolunteerExperienceAggregateArgs>): Prisma.PrismaPromise<GetVolunteerExperienceAggregateType<T>>

    /**
     * Group by VolunteerExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerExperienceGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerExperience model
   */
  readonly fields: VolunteerExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VolunteerExperience model
   */
  interface VolunteerExperienceFieldRefs {
    readonly id: FieldRef<"VolunteerExperience", 'String'>
    readonly profileId: FieldRef<"VolunteerExperience", 'String'>
    readonly organization: FieldRef<"VolunteerExperience", 'String'>
    readonly role: FieldRef<"VolunteerExperience", 'String'>
    readonly cause: FieldRef<"VolunteerExperience", 'String'>
    readonly location: FieldRef<"VolunteerExperience", 'String'>
    readonly startDate: FieldRef<"VolunteerExperience", 'DateTime'>
    readonly endDate: FieldRef<"VolunteerExperience", 'DateTime'>
    readonly isCurrent: FieldRef<"VolunteerExperience", 'Boolean'>
    readonly description: FieldRef<"VolunteerExperience", 'String'>
    readonly achievements: FieldRef<"VolunteerExperience", 'String[]'>
    readonly order: FieldRef<"VolunteerExperience", 'Int'>
    readonly createdAt: FieldRef<"VolunteerExperience", 'DateTime'>
    readonly updatedAt: FieldRef<"VolunteerExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerExperience findUnique
   */
  export type VolunteerExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerExperience to fetch.
     */
    where: VolunteerExperienceWhereUniqueInput
  }

  /**
   * VolunteerExperience findUniqueOrThrow
   */
  export type VolunteerExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerExperience to fetch.
     */
    where: VolunteerExperienceWhereUniqueInput
  }

  /**
   * VolunteerExperience findFirst
   */
  export type VolunteerExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerExperience to fetch.
     */
    where?: VolunteerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerExperiences to fetch.
     */
    orderBy?: VolunteerExperienceOrderByWithRelationInput | VolunteerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerExperiences.
     */
    cursor?: VolunteerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerExperiences.
     */
    distinct?: VolunteerExperienceScalarFieldEnum | VolunteerExperienceScalarFieldEnum[]
  }

  /**
   * VolunteerExperience findFirstOrThrow
   */
  export type VolunteerExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerExperience to fetch.
     */
    where?: VolunteerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerExperiences to fetch.
     */
    orderBy?: VolunteerExperienceOrderByWithRelationInput | VolunteerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerExperiences.
     */
    cursor?: VolunteerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerExperiences.
     */
    distinct?: VolunteerExperienceScalarFieldEnum | VolunteerExperienceScalarFieldEnum[]
  }

  /**
   * VolunteerExperience findMany
   */
  export type VolunteerExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerExperiences to fetch.
     */
    where?: VolunteerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerExperiences to fetch.
     */
    orderBy?: VolunteerExperienceOrderByWithRelationInput | VolunteerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerExperiences.
     */
    cursor?: VolunteerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerExperiences.
     */
    skip?: number
    distinct?: VolunteerExperienceScalarFieldEnum | VolunteerExperienceScalarFieldEnum[]
  }

  /**
   * VolunteerExperience create
   */
  export type VolunteerExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerExperience.
     */
    data: XOR<VolunteerExperienceCreateInput, VolunteerExperienceUncheckedCreateInput>
  }

  /**
   * VolunteerExperience createMany
   */
  export type VolunteerExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerExperiences.
     */
    data: VolunteerExperienceCreateManyInput | VolunteerExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerExperience createManyAndReturn
   */
  export type VolunteerExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many VolunteerExperiences.
     */
    data: VolunteerExperienceCreateManyInput | VolunteerExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerExperience update
   */
  export type VolunteerExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerExperience.
     */
    data: XOR<VolunteerExperienceUpdateInput, VolunteerExperienceUncheckedUpdateInput>
    /**
     * Choose, which VolunteerExperience to update.
     */
    where: VolunteerExperienceWhereUniqueInput
  }

  /**
   * VolunteerExperience updateMany
   */
  export type VolunteerExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerExperiences.
     */
    data: XOR<VolunteerExperienceUpdateManyMutationInput, VolunteerExperienceUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerExperiences to update
     */
    where?: VolunteerExperienceWhereInput
    /**
     * Limit how many VolunteerExperiences to update.
     */
    limit?: number
  }

  /**
   * VolunteerExperience updateManyAndReturn
   */
  export type VolunteerExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * The data used to update VolunteerExperiences.
     */
    data: XOR<VolunteerExperienceUpdateManyMutationInput, VolunteerExperienceUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerExperiences to update
     */
    where?: VolunteerExperienceWhereInput
    /**
     * Limit how many VolunteerExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerExperience upsert
   */
  export type VolunteerExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerExperience to update in case it exists.
     */
    where: VolunteerExperienceWhereUniqueInput
    /**
     * In case the VolunteerExperience found by the `where` argument doesn't exist, create a new VolunteerExperience with this data.
     */
    create: XOR<VolunteerExperienceCreateInput, VolunteerExperienceUncheckedCreateInput>
    /**
     * In case the VolunteerExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerExperienceUpdateInput, VolunteerExperienceUncheckedUpdateInput>
  }

  /**
   * VolunteerExperience delete
   */
  export type VolunteerExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
    /**
     * Filter which VolunteerExperience to delete.
     */
    where: VolunteerExperienceWhereUniqueInput
  }

  /**
   * VolunteerExperience deleteMany
   */
  export type VolunteerExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerExperiences to delete
     */
    where?: VolunteerExperienceWhereInput
    /**
     * Limit how many VolunteerExperiences to delete.
     */
    limit?: number
  }

  /**
   * VolunteerExperience without action
   */
  export type VolunteerExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerExperience
     */
    select?: VolunteerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerExperience
     */
    omit?: VolunteerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    order: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    order: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    role: string | null
    url: string | null
    logoUrl: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    role: string | null
    url: string | null
    logoUrl: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean | null
    description: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    profileId: number
    name: number
    role: number
    url: number
    logoUrl: number
    location: number
    startDate: number
    endDate: number
    isCurrent: number
    description: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    order?: true
  }

  export type OrganizationSumAggregateInputType = {
    order?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    role?: true
    url?: true
    logoUrl?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    role?: true
    url?: true
    logoUrl?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    role?: true
    url?: true
    logoUrl?: true
    location?: true
    startDate?: true
    endDate?: true
    isCurrent?: true
    description?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    profileId: string
    name: string
    role: string | null
    url: string | null
    logoUrl: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    isCurrent: boolean
    description: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    role?: boolean
    url?: boolean
    logoUrl?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    role?: boolean
    url?: boolean
    logoUrl?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    role?: boolean
    url?: boolean
    logoUrl?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    profileId?: boolean
    name?: boolean
    role?: boolean
    url?: boolean
    logoUrl?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    isCurrent?: boolean
    description?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "name" | "role" | "url" | "logoUrl" | "location" | "startDate" | "endDate" | "isCurrent" | "description" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      name: string
      role: string | null
      url: string | null
      logoUrl: string | null
      location: string | null
      startDate: Date | null
      endDate: Date | null
      isCurrent: boolean
      description: string | null
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly profileId: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly role: FieldRef<"Organization", 'String'>
    readonly url: FieldRef<"Organization", 'String'>
    readonly logoUrl: FieldRef<"Organization", 'String'>
    readonly location: FieldRef<"Organization", 'String'>
    readonly startDate: FieldRef<"Organization", 'DateTime'>
    readonly endDate: FieldRef<"Organization", 'DateTime'>
    readonly isCurrent: FieldRef<"Organization", 'Boolean'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly order: FieldRef<"Organization", 'Int'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    repliedAt: Date | null
    createdAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    repliedAt: Date | null
    createdAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    profileId: number
    name: number
    email: number
    subject: number
    message: number
    isRead: number
    repliedAt: number
    createdAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    repliedAt?: true
    createdAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    repliedAt?: true
    createdAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    profileId?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    repliedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    profileId: string | null
    name: string
    email: string
    subject: string | null
    message: string
    isRead: boolean
    repliedAt: Date | null
    createdAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    profileId?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    repliedAt?: boolean
    createdAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "name" | "email" | "subject" | "message" | "isRead" | "repliedAt" | "createdAt", ExtArgs["result"]["contact"]>
  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }
  export type ContactIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | Contact$profileArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string | null
      name: string
      email: string
      subject: string | null
      message: string
      isRead: boolean
      repliedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends Contact$profileArgs<ExtArgs> = {}>(args?: Subset<T, Contact$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly profileId: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly subject: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly isRead: FieldRef<"Contact", 'Boolean'>
    readonly repliedAt: FieldRef<"Contact", 'DateTime'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact.profile
   */
  export type Contact$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    fullName: 'fullName',
    headline: 'headline',
    summary: 'summary',
    location: 'location',
    phone: 'phone',
    email: 'email',
    birthDate: 'birthDate',
    website: 'website',
    linkedinUrl: 'linkedinUrl',
    githubUrl: 'githubUrl',
    twitterUrl: 'twitterUrl',
    instagramUrl: 'instagramUrl',
    tiktokUrl: 'tiktokUrl',
    facebookUrl: 'facebookUrl',
    youtubeUrl: 'youtubeUrl',
    mediumUrl: 'mediumUrl',
    avatarUrl: 'avatarUrl',
    resumeUrl: 'resumeUrl',
    heroSubtitle: 'heroSubtitle',
    heroSequences: 'heroSequences',
    visibleSections: 'visibleSections',
    activeTheme: 'activeTheme',
    showPhoto: 'showPhoto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    name: 'name',
    list: 'list',
    category: 'category',
    proficiency: 'proficiency',
    iconSlug: 'iconSlug',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    institution: 'institution',
    degree: 'degree',
    field: 'field',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    gpa: 'gpa',
    description: 'description',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    company: 'company',
    position: 'position',
    location: 'location',
    locationType: 'locationType',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    description: 'description',
    achievements: 'achievements',
    companyUrl: 'companyUrl',
    companyLogo: 'companyLogo',
    employmentType: 'employmentType',
    images: 'images',
    aiHint: 'aiHint',
    isPublic: 'isPublic',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    title: 'title',
    slug: 'slug',
    summary: 'summary',
    description: 'description',
    coverImage: 'coverImage',
    gallery: 'gallery',
    body: 'body',
    liveUrl: 'liveUrl',
    githubUrl: 'githubUrl',
    projectUrl: 'projectUrl',
    caseStudyUrl: 'caseStudyUrl',
    year: 'year',
    tags: 'tags',
    images: 'images',
    collaborators: 'collaborators',
    client: 'client',
    industry: 'industry',
    duration: 'duration',
    servicesProvided: 'servicesProvided',
    techStack: 'techStack',
    isFeatured: 'isFeatured',
    status: 'status',
    aiHint: 'aiHint',
    publishedAt: 'publishedAt',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const PublicationScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    title: 'title',
    publisher: 'publisher',
    url: 'url',
    publishedDate: 'publishedDate',
    description: 'description',
    authors: 'authors',
    doi: 'doi',
    publicationType: 'publicationType',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublicationScalarFieldEnum = (typeof PublicationScalarFieldEnum)[keyof typeof PublicationScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    name: 'name',
    issuer: 'issuer',
    url: 'url',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    doesNotExpire: 'doesNotExpire',
    credentialId: 'credentialId',
    credentialUrl: 'credentialUrl',
    logoUrl: 'logoUrl',
    images: 'images',
    aiHint: 'aiHint',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const VolunteerExperienceScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    organization: 'organization',
    role: 'role',
    cause: 'cause',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    description: 'description',
    achievements: 'achievements',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerExperienceScalarFieldEnum = (typeof VolunteerExperienceScalarFieldEnum)[keyof typeof VolunteerExperienceScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    name: 'name',
    role: 'role',
    url: 'url',
    logoUrl: 'logoUrl',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    isCurrent: 'isCurrent',
    description: 'description',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    repliedAt: 'repliedAt',
    createdAt: 'createdAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    slug?: StringFilter<"Profile"> | string
    fullName?: StringFilter<"Profile"> | string
    headline?: StringFilter<"Profile"> | string
    summary?: StringFilter<"Profile"> | string
    location?: StringFilter<"Profile"> | string
    phone?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    birthDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    twitterUrl?: StringNullableFilter<"Profile"> | string | null
    instagramUrl?: StringNullableFilter<"Profile"> | string | null
    tiktokUrl?: StringNullableFilter<"Profile"> | string | null
    facebookUrl?: StringNullableFilter<"Profile"> | string | null
    youtubeUrl?: StringNullableFilter<"Profile"> | string | null
    mediumUrl?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    heroSubtitle?: StringNullableFilter<"Profile"> | string | null
    heroSequences?: JsonNullableFilter<"Profile">
    visibleSections?: StringNullableListFilter<"Profile">
    activeTheme?: StringNullableFilter<"Profile"> | string | null
    showPhoto?: BoolFilter<"Profile"> | boolean
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    skills?: SkillListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    projects?: ProjectListRelationFilter
    publications?: PublicationListRelationFilter
    licenses?: LicenseListRelationFilter
    volunteerExp?: VolunteerExperienceListRelationFilter
    organizations?: OrganizationListRelationFilter
    contacts?: ContactListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    tiktokUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    mediumUrl?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    heroSequences?: SortOrderInput | SortOrder
    visibleSections?: SortOrder
    activeTheme?: SortOrderInput | SortOrder
    showPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    skills?: SkillOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    experience?: ExperienceOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    publications?: PublicationOrderByRelationAggregateInput
    licenses?: LicenseOrderByRelationAggregateInput
    volunteerExp?: VolunteerExperienceOrderByRelationAggregateInput
    organizations?: OrganizationOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringFilter<"Profile"> | string
    headline?: StringFilter<"Profile"> | string
    summary?: StringFilter<"Profile"> | string
    location?: StringFilter<"Profile"> | string
    phone?: StringFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    birthDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    twitterUrl?: StringNullableFilter<"Profile"> | string | null
    instagramUrl?: StringNullableFilter<"Profile"> | string | null
    tiktokUrl?: StringNullableFilter<"Profile"> | string | null
    facebookUrl?: StringNullableFilter<"Profile"> | string | null
    youtubeUrl?: StringNullableFilter<"Profile"> | string | null
    mediumUrl?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    heroSubtitle?: StringNullableFilter<"Profile"> | string | null
    heroSequences?: JsonNullableFilter<"Profile">
    visibleSections?: StringNullableListFilter<"Profile">
    activeTheme?: StringNullableFilter<"Profile"> | string | null
    showPhoto?: BoolFilter<"Profile"> | boolean
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    skills?: SkillListRelationFilter
    education?: EducationListRelationFilter
    experience?: ExperienceListRelationFilter
    projects?: ProjectListRelationFilter
    publications?: PublicationListRelationFilter
    licenses?: LicenseListRelationFilter
    volunteerExp?: VolunteerExperienceListRelationFilter
    organizations?: OrganizationListRelationFilter
    contacts?: ContactListRelationFilter
  }, "id" | "slug">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    tiktokUrl?: SortOrderInput | SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    mediumUrl?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    heroSequences?: SortOrderInput | SortOrder
    visibleSections?: SortOrder
    activeTheme?: SortOrderInput | SortOrder
    showPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    slug?: StringWithAggregatesFilter<"Profile"> | string
    fullName?: StringWithAggregatesFilter<"Profile"> | string
    headline?: StringWithAggregatesFilter<"Profile"> | string
    summary?: StringWithAggregatesFilter<"Profile"> | string
    location?: StringWithAggregatesFilter<"Profile"> | string
    phone?: StringWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    birthDate?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    tiktokUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    facebookUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    youtubeUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    mediumUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroSubtitle?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    heroSequences?: JsonNullableWithAggregatesFilter<"Profile">
    visibleSections?: StringNullableListFilter<"Profile">
    activeTheme?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    showPhoto?: BoolWithAggregatesFilter<"Profile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    profileId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    list?: StringNullableFilter<"Skill"> | string | null
    category?: StringNullableFilter<"Skill"> | string | null
    proficiency?: IntNullableFilter<"Skill"> | number | null
    iconSlug?: StringNullableFilter<"Skill"> | string | null
    order?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    list?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    proficiency?: SortOrderInput | SortOrder
    iconSlug?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    profileId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    list?: StringNullableFilter<"Skill"> | string | null
    category?: StringNullableFilter<"Skill"> | string | null
    proficiency?: IntNullableFilter<"Skill"> | number | null
    iconSlug?: StringNullableFilter<"Skill"> | string | null
    order?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    list?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    proficiency?: SortOrderInput | SortOrder
    iconSlug?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    profileId?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    list?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    category?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    proficiency?: IntNullableWithAggregatesFilter<"Skill"> | number | null
    iconSlug?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    order?: IntWithAggregatesFilter<"Skill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    profileId?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringNullableFilter<"Education"> | string | null
    field?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrent?: BoolFilter<"Education"> | boolean
    gpa?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    logoUrl?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    institution?: SortOrder
    degree?: SortOrderInput | SortOrder
    field?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    gpa?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    profileId?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringNullableFilter<"Education"> | string | null
    field?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrent?: BoolFilter<"Education"> | boolean
    gpa?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    logoUrl?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    institution?: SortOrder
    degree?: SortOrderInput | SortOrder
    field?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    gpa?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    profileId?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringNullableWithAggregatesFilter<"Education"> | string | null
    field?: StringNullableWithAggregatesFilter<"Education"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    isCurrent?: BoolWithAggregatesFilter<"Education"> | boolean
    gpa?: StringNullableWithAggregatesFilter<"Education"> | string | null
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Education"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Education"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    profileId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    locationType?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    achievements?: StringNullableListFilter<"Experience">
    companyUrl?: StringNullableFilter<"Experience"> | string | null
    companyLogo?: StringNullableFilter<"Experience"> | string | null
    employmentType?: StringNullableFilter<"Experience"> | string | null
    images?: StringNullableListFilter<"Experience">
    aiHint?: StringNullableFilter<"Experience"> | string | null
    isPublic?: BoolFilter<"Experience"> | boolean
    order?: IntFilter<"Experience"> | number
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    location?: SortOrderInput | SortOrder
    locationType?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    achievements?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    images?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    profileId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    locationType?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    achievements?: StringNullableListFilter<"Experience">
    companyUrl?: StringNullableFilter<"Experience"> | string | null
    companyLogo?: StringNullableFilter<"Experience"> | string | null
    employmentType?: StringNullableFilter<"Experience"> | string | null
    images?: StringNullableListFilter<"Experience">
    aiHint?: StringNullableFilter<"Experience"> | string | null
    isPublic?: BoolFilter<"Experience"> | boolean
    order?: IntFilter<"Experience"> | number
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    location?: SortOrderInput | SortOrder
    locationType?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    achievements?: SortOrder
    companyUrl?: SortOrderInput | SortOrder
    companyLogo?: SortOrderInput | SortOrder
    employmentType?: SortOrderInput | SortOrder
    images?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    profileId?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    position?: StringWithAggregatesFilter<"Experience"> | string
    location?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    locationType?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    isCurrent?: BoolWithAggregatesFilter<"Experience"> | boolean
    description?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    achievements?: StringNullableListFilter<"Experience">
    companyUrl?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    companyLogo?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    employmentType?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    images?: StringNullableListFilter<"Experience">
    aiHint?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Experience"> | boolean
    order?: IntWithAggregatesFilter<"Experience"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    profileId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    summary?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    gallery?: JsonNullableFilter<"Project">
    body?: JsonNullableFilter<"Project">
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    projectUrl?: StringNullableFilter<"Project"> | string | null
    caseStudyUrl?: StringNullableFilter<"Project"> | string | null
    year?: IntNullableFilter<"Project"> | number | null
    tags?: StringNullableListFilter<"Project">
    images?: StringNullableListFilter<"Project">
    collaborators?: StringNullableListFilter<"Project">
    client?: StringNullableFilter<"Project"> | string | null
    industry?: StringNullableFilter<"Project"> | string | null
    duration?: StringNullableFilter<"Project"> | string | null
    servicesProvided?: StringNullableListFilter<"Project">
    techStack?: StringNullableListFilter<"Project">
    isFeatured?: BoolFilter<"Project"> | boolean
    status?: EnumPublishStatusFilter<"Project"> | $Enums.PublishStatus
    aiHint?: StringNullableFilter<"Project"> | string | null
    publishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    projectUrl?: SortOrderInput | SortOrder
    caseStudyUrl?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    tags?: SortOrder
    images?: SortOrder
    collaborators?: SortOrder
    client?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    servicesProvided?: SortOrder
    techStack?: SortOrder
    isFeatured?: SortOrder
    status?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    profileId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    summary?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    gallery?: JsonNullableFilter<"Project">
    body?: JsonNullableFilter<"Project">
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    projectUrl?: StringNullableFilter<"Project"> | string | null
    caseStudyUrl?: StringNullableFilter<"Project"> | string | null
    year?: IntNullableFilter<"Project"> | number | null
    tags?: StringNullableListFilter<"Project">
    images?: StringNullableListFilter<"Project">
    collaborators?: StringNullableListFilter<"Project">
    client?: StringNullableFilter<"Project"> | string | null
    industry?: StringNullableFilter<"Project"> | string | null
    duration?: StringNullableFilter<"Project"> | string | null
    servicesProvided?: StringNullableListFilter<"Project">
    techStack?: StringNullableListFilter<"Project">
    isFeatured?: BoolFilter<"Project"> | boolean
    status?: EnumPublishStatusFilter<"Project"> | $Enums.PublishStatus
    aiHint?: StringNullableFilter<"Project"> | string | null
    publishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "slug">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    gallery?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    projectUrl?: SortOrderInput | SortOrder
    caseStudyUrl?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    tags?: SortOrder
    images?: SortOrder
    collaborators?: SortOrder
    client?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    servicesProvided?: SortOrder
    techStack?: SortOrder
    isFeatured?: SortOrder
    status?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    profileId?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    slug?: StringWithAggregatesFilter<"Project"> | string
    summary?: StringNullableWithAggregatesFilter<"Project"> | string | null
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"Project"> | string | null
    gallery?: JsonNullableWithAggregatesFilter<"Project">
    body?: JsonNullableWithAggregatesFilter<"Project">
    liveUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    projectUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    caseStudyUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    year?: IntNullableWithAggregatesFilter<"Project"> | number | null
    tags?: StringNullableListFilter<"Project">
    images?: StringNullableListFilter<"Project">
    collaborators?: StringNullableListFilter<"Project">
    client?: StringNullableWithAggregatesFilter<"Project"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Project"> | string | null
    duration?: StringNullableWithAggregatesFilter<"Project"> | string | null
    servicesProvided?: StringNullableListFilter<"Project">
    techStack?: StringNullableListFilter<"Project">
    isFeatured?: BoolWithAggregatesFilter<"Project"> | boolean
    status?: EnumPublishStatusWithAggregatesFilter<"Project"> | $Enums.PublishStatus
    aiHint?: StringNullableWithAggregatesFilter<"Project"> | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    order?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type PublicationWhereInput = {
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    id?: StringFilter<"Publication"> | string
    profileId?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    publisher?: StringNullableFilter<"Publication"> | string | null
    url?: StringNullableFilter<"Publication"> | string | null
    publishedDate?: DateTimeNullableFilter<"Publication"> | Date | string | null
    description?: StringNullableFilter<"Publication"> | string | null
    authors?: StringNullableListFilter<"Publication">
    doi?: StringNullableFilter<"Publication"> | string | null
    publicationType?: StringNullableFilter<"Publication"> | string | null
    order?: IntFilter<"Publication"> | number
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type PublicationOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    publisher?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    publishedDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    authors?: SortOrder
    doi?: SortOrderInput | SortOrder
    publicationType?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type PublicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicationWhereInput | PublicationWhereInput[]
    OR?: PublicationWhereInput[]
    NOT?: PublicationWhereInput | PublicationWhereInput[]
    profileId?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    publisher?: StringNullableFilter<"Publication"> | string | null
    url?: StringNullableFilter<"Publication"> | string | null
    publishedDate?: DateTimeNullableFilter<"Publication"> | Date | string | null
    description?: StringNullableFilter<"Publication"> | string | null
    authors?: StringNullableListFilter<"Publication">
    doi?: StringNullableFilter<"Publication"> | string | null
    publicationType?: StringNullableFilter<"Publication"> | string | null
    order?: IntFilter<"Publication"> | number
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type PublicationOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    publisher?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    publishedDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    authors?: SortOrder
    doi?: SortOrderInput | SortOrder
    publicationType?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublicationCountOrderByAggregateInput
    _avg?: PublicationAvgOrderByAggregateInput
    _max?: PublicationMaxOrderByAggregateInput
    _min?: PublicationMinOrderByAggregateInput
    _sum?: PublicationSumOrderByAggregateInput
  }

  export type PublicationScalarWhereWithAggregatesInput = {
    AND?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    OR?: PublicationScalarWhereWithAggregatesInput[]
    NOT?: PublicationScalarWhereWithAggregatesInput | PublicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publication"> | string
    profileId?: StringWithAggregatesFilter<"Publication"> | string
    title?: StringWithAggregatesFilter<"Publication"> | string
    publisher?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    url?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    publishedDate?: DateTimeNullableWithAggregatesFilter<"Publication"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    authors?: StringNullableListFilter<"Publication">
    doi?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    publicationType?: StringNullableWithAggregatesFilter<"Publication"> | string | null
    order?: IntWithAggregatesFilter<"Publication"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Publication"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    profileId?: StringFilter<"License"> | string
    name?: StringFilter<"License"> | string
    issuer?: StringFilter<"License"> | string
    url?: StringNullableFilter<"License"> | string | null
    issueDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"License"> | Date | string | null
    doesNotExpire?: BoolFilter<"License"> | boolean
    credentialId?: StringNullableFilter<"License"> | string | null
    credentialUrl?: StringNullableFilter<"License"> | string | null
    logoUrl?: StringNullableFilter<"License"> | string | null
    images?: StringNullableListFilter<"License">
    aiHint?: StringNullableFilter<"License"> | string | null
    order?: IntFilter<"License"> | number
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    url?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    doesNotExpire?: SortOrder
    credentialId?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    images?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    profileId?: StringFilter<"License"> | string
    name?: StringFilter<"License"> | string
    issuer?: StringFilter<"License"> | string
    url?: StringNullableFilter<"License"> | string | null
    issueDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"License"> | Date | string | null
    doesNotExpire?: BoolFilter<"License"> | boolean
    credentialId?: StringNullableFilter<"License"> | string | null
    credentialUrl?: StringNullableFilter<"License"> | string | null
    logoUrl?: StringNullableFilter<"License"> | string | null
    images?: StringNullableListFilter<"License">
    aiHint?: StringNullableFilter<"License"> | string | null
    order?: IntFilter<"License"> | number
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    url?: SortOrderInput | SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    doesNotExpire?: SortOrder
    credentialId?: SortOrderInput | SortOrder
    credentialUrl?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    images?: SortOrder
    aiHint?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _avg?: LicenseAvgOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
    _sum?: LicenseSumOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    profileId?: StringWithAggregatesFilter<"License"> | string
    name?: StringWithAggregatesFilter<"License"> | string
    issuer?: StringWithAggregatesFilter<"License"> | string
    url?: StringNullableWithAggregatesFilter<"License"> | string | null
    issueDate?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    doesNotExpire?: BoolWithAggregatesFilter<"License"> | boolean
    credentialId?: StringNullableWithAggregatesFilter<"License"> | string | null
    credentialUrl?: StringNullableWithAggregatesFilter<"License"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"License"> | string | null
    images?: StringNullableListFilter<"License">
    aiHint?: StringNullableWithAggregatesFilter<"License"> | string | null
    order?: IntWithAggregatesFilter<"License"> | number
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type VolunteerExperienceWhereInput = {
    AND?: VolunteerExperienceWhereInput | VolunteerExperienceWhereInput[]
    OR?: VolunteerExperienceWhereInput[]
    NOT?: VolunteerExperienceWhereInput | VolunteerExperienceWhereInput[]
    id?: StringFilter<"VolunteerExperience"> | string
    profileId?: StringFilter<"VolunteerExperience"> | string
    organization?: StringFilter<"VolunteerExperience"> | string
    role?: StringFilter<"VolunteerExperience"> | string
    cause?: StringNullableFilter<"VolunteerExperience"> | string | null
    location?: StringNullableFilter<"VolunteerExperience"> | string | null
    startDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    isCurrent?: BoolFilter<"VolunteerExperience"> | boolean
    description?: StringNullableFilter<"VolunteerExperience"> | string | null
    achievements?: StringNullableListFilter<"VolunteerExperience">
    order?: IntFilter<"VolunteerExperience"> | number
    createdAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type VolunteerExperienceOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    organization?: SortOrder
    role?: SortOrder
    cause?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    achievements?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type VolunteerExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VolunteerExperienceWhereInput | VolunteerExperienceWhereInput[]
    OR?: VolunteerExperienceWhereInput[]
    NOT?: VolunteerExperienceWhereInput | VolunteerExperienceWhereInput[]
    profileId?: StringFilter<"VolunteerExperience"> | string
    organization?: StringFilter<"VolunteerExperience"> | string
    role?: StringFilter<"VolunteerExperience"> | string
    cause?: StringNullableFilter<"VolunteerExperience"> | string | null
    location?: StringNullableFilter<"VolunteerExperience"> | string | null
    startDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    isCurrent?: BoolFilter<"VolunteerExperience"> | boolean
    description?: StringNullableFilter<"VolunteerExperience"> | string | null
    achievements?: StringNullableListFilter<"VolunteerExperience">
    order?: IntFilter<"VolunteerExperience"> | number
    createdAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type VolunteerExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    organization?: SortOrder
    role?: SortOrder
    cause?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    achievements?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerExperienceCountOrderByAggregateInput
    _avg?: VolunteerExperienceAvgOrderByAggregateInput
    _max?: VolunteerExperienceMaxOrderByAggregateInput
    _min?: VolunteerExperienceMinOrderByAggregateInput
    _sum?: VolunteerExperienceSumOrderByAggregateInput
  }

  export type VolunteerExperienceScalarWhereWithAggregatesInput = {
    AND?: VolunteerExperienceScalarWhereWithAggregatesInput | VolunteerExperienceScalarWhereWithAggregatesInput[]
    OR?: VolunteerExperienceScalarWhereWithAggregatesInput[]
    NOT?: VolunteerExperienceScalarWhereWithAggregatesInput | VolunteerExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VolunteerExperience"> | string
    profileId?: StringWithAggregatesFilter<"VolunteerExperience"> | string
    organization?: StringWithAggregatesFilter<"VolunteerExperience"> | string
    role?: StringWithAggregatesFilter<"VolunteerExperience"> | string
    cause?: StringNullableWithAggregatesFilter<"VolunteerExperience"> | string | null
    location?: StringNullableWithAggregatesFilter<"VolunteerExperience"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"VolunteerExperience"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"VolunteerExperience"> | Date | string | null
    isCurrent?: BoolWithAggregatesFilter<"VolunteerExperience"> | boolean
    description?: StringNullableWithAggregatesFilter<"VolunteerExperience"> | string | null
    achievements?: StringNullableListFilter<"VolunteerExperience">
    order?: IntWithAggregatesFilter<"VolunteerExperience"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerExperience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VolunteerExperience"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    profileId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    role?: StringNullableFilter<"Organization"> | string | null
    url?: StringNullableFilter<"Organization"> | string | null
    logoUrl?: StringNullableFilter<"Organization"> | string | null
    location?: StringNullableFilter<"Organization"> | string | null
    startDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    isCurrent?: BoolFilter<"Organization"> | boolean
    description?: StringNullableFilter<"Organization"> | string | null
    order?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    profileId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    role?: StringNullableFilter<"Organization"> | string | null
    url?: StringNullableFilter<"Organization"> | string | null
    logoUrl?: StringNullableFilter<"Organization"> | string | null
    location?: StringNullableFilter<"Organization"> | string | null
    startDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    isCurrent?: BoolFilter<"Organization"> | boolean
    description?: StringNullableFilter<"Organization"> | string | null
    order?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    role?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    profileId?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    role?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    url?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    location?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Organization"> | Date | string | null
    isCurrent?: BoolWithAggregatesFilter<"Organization"> | boolean
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    order?: IntWithAggregatesFilter<"Organization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    profileId?: StringNullableFilter<"Contact"> | string | null
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    isRead?: BoolFilter<"Contact"> | boolean
    repliedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    profileId?: StringNullableFilter<"Contact"> | string | null
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    isRead?: BoolFilter<"Contact"> | boolean
    repliedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    profileId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    subject?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    message?: StringWithAggregatesFilter<"Contact"> | string
    isRead?: BoolWithAggregatesFilter<"Contact"> | boolean
    repliedAt?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    profileId: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: string
    profileId: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateInput = {
    id?: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    profileId: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationCreateManyInput = {
    id?: string
    profileId: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    id?: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    profileId: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    profileId: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    profileId: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    profileId: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateInput = {
    id?: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutPublicationsInput
  }

  export type PublicationUncheckedCreateInput = {
    id?: string
    profileId: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutPublicationsNestedInput
  }

  export type PublicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationCreateManyInput = {
    id?: string
    profileId: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutLicensesInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    profileId: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutLicensesNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyInput = {
    id?: string
    profileId: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceCreateInput = {
    id?: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerExpInput
  }

  export type VolunteerExperienceUncheckedCreateInput = {
    id?: string
    profileId: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerExpNestedInput
  }

  export type VolunteerExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceCreateManyInput = {
    id?: string
    profileId: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationsInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    profileId: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationsNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateManyInput = {
    id?: string
    profileId: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
    profile?: ProfileCreateNestedOneWithoutContactsInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    profileId?: string | null
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutContactsNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    profileId?: string | null
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type PublicationListRelationFilter = {
    every?: PublicationWhereInput
    some?: PublicationWhereInput
    none?: PublicationWhereInput
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type VolunteerExperienceListRelationFilter = {
    every?: VolunteerExperienceWhereInput
    some?: VolunteerExperienceWhereInput
    none?: VolunteerExperienceWhereInput
  }

  export type OrganizationListRelationFilter = {
    every?: OrganizationWhereInput
    some?: OrganizationWhereInput
    none?: OrganizationWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    website?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramUrl?: SortOrder
    tiktokUrl?: SortOrder
    facebookUrl?: SortOrder
    youtubeUrl?: SortOrder
    mediumUrl?: SortOrder
    avatarUrl?: SortOrder
    resumeUrl?: SortOrder
    heroSubtitle?: SortOrder
    heroSequences?: SortOrder
    visibleSections?: SortOrder
    activeTheme?: SortOrder
    showPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    website?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramUrl?: SortOrder
    tiktokUrl?: SortOrder
    facebookUrl?: SortOrder
    youtubeUrl?: SortOrder
    mediumUrl?: SortOrder
    avatarUrl?: SortOrder
    resumeUrl?: SortOrder
    heroSubtitle?: SortOrder
    activeTheme?: SortOrder
    showPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    location?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    birthDate?: SortOrder
    website?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    twitterUrl?: SortOrder
    instagramUrl?: SortOrder
    tiktokUrl?: SortOrder
    facebookUrl?: SortOrder
    youtubeUrl?: SortOrder
    mediumUrl?: SortOrder
    avatarUrl?: SortOrder
    resumeUrl?: SortOrder
    heroSubtitle?: SortOrder
    activeTheme?: SortOrder
    showPhoto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    list?: SortOrder
    category?: SortOrder
    proficiency?: SortOrder
    iconSlug?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    proficiency?: SortOrder
    order?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    list?: SortOrder
    category?: SortOrder
    proficiency?: SortOrder
    iconSlug?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    list?: SortOrder
    category?: SortOrder
    proficiency?: SortOrder
    iconSlug?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    proficiency?: SortOrder
    order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    gpa?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    gpa?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    field?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    gpa?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    achievements?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    employmentType?: SortOrder
    images?: SortOrder
    aiHint?: SortOrder
    isPublic?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    employmentType?: SortOrder
    aiHint?: SortOrder
    isPublic?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    company?: SortOrder
    position?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    companyUrl?: SortOrder
    companyLogo?: SortOrder
    employmentType?: SortOrder
    aiHint?: SortOrder
    isPublic?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    gallery?: SortOrder
    body?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    projectUrl?: SortOrder
    caseStudyUrl?: SortOrder
    year?: SortOrder
    tags?: SortOrder
    images?: SortOrder
    collaborators?: SortOrder
    client?: SortOrder
    industry?: SortOrder
    duration?: SortOrder
    servicesProvided?: SortOrder
    techStack?: SortOrder
    isFeatured?: SortOrder
    status?: SortOrder
    aiHint?: SortOrder
    publishedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    year?: SortOrder
    order?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    projectUrl?: SortOrder
    caseStudyUrl?: SortOrder
    year?: SortOrder
    client?: SortOrder
    industry?: SortOrder
    duration?: SortOrder
    isFeatured?: SortOrder
    status?: SortOrder
    aiHint?: SortOrder
    publishedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    projectUrl?: SortOrder
    caseStudyUrl?: SortOrder
    year?: SortOrder
    client?: SortOrder
    industry?: SortOrder
    duration?: SortOrder
    isFeatured?: SortOrder
    status?: SortOrder
    aiHint?: SortOrder
    publishedAt?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    year?: SortOrder
    order?: SortOrder
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type PublicationCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
    publishedDate?: SortOrder
    description?: SortOrder
    authors?: SortOrder
    doi?: SortOrder
    publicationType?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PublicationMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
    publishedDate?: SortOrder
    description?: SortOrder
    doi?: SortOrder
    publicationType?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    title?: SortOrder
    publisher?: SortOrder
    url?: SortOrder
    publishedDate?: SortOrder
    description?: SortOrder
    doi?: SortOrder
    publicationType?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublicationSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    url?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    doesNotExpire?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    logoUrl?: SortOrder
    images?: SortOrder
    aiHint?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    url?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    doesNotExpire?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    logoUrl?: SortOrder
    aiHint?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    url?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    doesNotExpire?: SortOrder
    credentialId?: SortOrder
    credentialUrl?: SortOrder
    logoUrl?: SortOrder
    aiHint?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VolunteerExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organization?: SortOrder
    role?: SortOrder
    cause?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    achievements?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerExperienceAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type VolunteerExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organization?: SortOrder
    role?: SortOrder
    cause?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organization?: SortOrder
    role?: SortOrder
    cause?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerExperienceSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    url?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    url?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    url?: SortOrder
    logoUrl?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    isCurrent?: SortOrder
    description?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ProfileCreatevisibleSectionsInput = {
    set: string[]
  }

  export type SkillCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutProfileInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutProfileInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput> | ProjectCreateWithoutProfileInput[] | ProjectUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProfileInput | ProjectCreateOrConnectWithoutProfileInput[]
    createMany?: ProjectCreateManyProfileInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type PublicationCreateNestedManyWithoutProfileInput = {
    create?: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput> | PublicationCreateWithoutProfileInput[] | PublicationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutProfileInput | PublicationCreateOrConnectWithoutProfileInput[]
    createMany?: PublicationCreateManyProfileInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type LicenseCreateNestedManyWithoutProfileInput = {
    create?: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput> | LicenseCreateWithoutProfileInput[] | LicenseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProfileInput | LicenseCreateOrConnectWithoutProfileInput[]
    createMany?: LicenseCreateManyProfileInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type VolunteerExperienceCreateNestedManyWithoutProfileInput = {
    create?: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput> | VolunteerExperienceCreateWithoutProfileInput[] | VolunteerExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VolunteerExperienceCreateOrConnectWithoutProfileInput | VolunteerExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: VolunteerExperienceCreateManyProfileInputEnvelope
    connect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
  }

  export type OrganizationCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput> | OrganizationCreateWithoutProfileInput[] | OrganizationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput | OrganizationCreateOrConnectWithoutProfileInput[]
    createMany?: OrganizationCreateManyProfileInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutProfileInput = {
    create?: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput> | ContactCreateWithoutProfileInput[] | ContactUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutProfileInput | ContactCreateOrConnectWithoutProfileInput[]
    createMany?: ContactCreateManyProfileInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput> | ProjectCreateWithoutProfileInput[] | ProjectUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProfileInput | ProjectCreateOrConnectWithoutProfileInput[]
    createMany?: ProjectCreateManyProfileInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type PublicationUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput> | PublicationCreateWithoutProfileInput[] | PublicationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutProfileInput | PublicationCreateOrConnectWithoutProfileInput[]
    createMany?: PublicationCreateManyProfileInputEnvelope
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput> | LicenseCreateWithoutProfileInput[] | LicenseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProfileInput | LicenseCreateOrConnectWithoutProfileInput[]
    createMany?: LicenseCreateManyProfileInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput> | VolunteerExperienceCreateWithoutProfileInput[] | VolunteerExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VolunteerExperienceCreateOrConnectWithoutProfileInput | VolunteerExperienceCreateOrConnectWithoutProfileInput[]
    createMany?: VolunteerExperienceCreateManyProfileInputEnvelope
    connect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
  }

  export type OrganizationUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput> | OrganizationCreateWithoutProfileInput[] | OrganizationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput | OrganizationCreateOrConnectWithoutProfileInput[]
    createMany?: OrganizationCreateManyProfileInputEnvelope
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput> | ContactCreateWithoutProfileInput[] | ContactUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutProfileInput | ContactCreateOrConnectWithoutProfileInput[]
    createMany?: ContactCreateManyProfileInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProfileUpdatevisibleSectionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SkillUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfileInput | SkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfileInput | SkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfileInput | SkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfileInput | EducationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfileInput | EducationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfileInput | EducationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutProfileInput | ExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutProfileInput | ExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutProfileInput | ExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput> | ProjectCreateWithoutProfileInput[] | ProjectUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProfileInput | ProjectCreateOrConnectWithoutProfileInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProfileInput | ProjectUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProjectCreateManyProfileInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProfileInput | ProjectUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProfileInput | ProjectUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PublicationUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput> | PublicationCreateWithoutProfileInput[] | PublicationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutProfileInput | PublicationCreateOrConnectWithoutProfileInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutProfileInput | PublicationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PublicationCreateManyProfileInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutProfileInput | PublicationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutProfileInput | PublicationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type LicenseUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput> | LicenseCreateWithoutProfileInput[] | LicenseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProfileInput | LicenseCreateOrConnectWithoutProfileInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutProfileInput | LicenseUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LicenseCreateManyProfileInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutProfileInput | LicenseUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutProfileInput | LicenseUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type VolunteerExperienceUpdateManyWithoutProfileNestedInput = {
    create?: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput> | VolunteerExperienceCreateWithoutProfileInput[] | VolunteerExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VolunteerExperienceCreateOrConnectWithoutProfileInput | VolunteerExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: VolunteerExperienceUpsertWithWhereUniqueWithoutProfileInput | VolunteerExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: VolunteerExperienceCreateManyProfileInputEnvelope
    set?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    disconnect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    delete?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    connect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    update?: VolunteerExperienceUpdateWithWhereUniqueWithoutProfileInput | VolunteerExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: VolunteerExperienceUpdateManyWithWhereWithoutProfileInput | VolunteerExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: VolunteerExperienceScalarWhereInput | VolunteerExperienceScalarWhereInput[]
  }

  export type OrganizationUpdateManyWithoutProfileNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput> | OrganizationCreateWithoutProfileInput[] | OrganizationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput | OrganizationCreateOrConnectWithoutProfileInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutProfileInput | OrganizationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: OrganizationCreateManyProfileInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutProfileInput | OrganizationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutProfileInput | OrganizationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput> | ContactCreateWithoutProfileInput[] | ContactUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutProfileInput | ContactCreateOrConnectWithoutProfileInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutProfileInput | ContactUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ContactCreateManyProfileInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutProfileInput | ContactUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutProfileInput | ContactUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfileInput | SkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfileInput | SkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfileInput | SkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput> | EducationCreateWithoutProfileInput[] | EducationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutProfileInput | EducationCreateOrConnectWithoutProfileInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutProfileInput | EducationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: EducationCreateManyProfileInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutProfileInput | EducationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutProfileInput | EducationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput> | ExperienceCreateWithoutProfileInput[] | ExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutProfileInput | ExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutProfileInput | ExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ExperienceCreateManyProfileInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutProfileInput | ExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutProfileInput | ExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput> | ProjectCreateWithoutProfileInput[] | ProjectUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutProfileInput | ProjectCreateOrConnectWithoutProfileInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutProfileInput | ProjectUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ProjectCreateManyProfileInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutProfileInput | ProjectUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutProfileInput | ProjectUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type PublicationUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput> | PublicationCreateWithoutProfileInput[] | PublicationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PublicationCreateOrConnectWithoutProfileInput | PublicationCreateOrConnectWithoutProfileInput[]
    upsert?: PublicationUpsertWithWhereUniqueWithoutProfileInput | PublicationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PublicationCreateManyProfileInputEnvelope
    set?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    disconnect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    delete?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    connect?: PublicationWhereUniqueInput | PublicationWhereUniqueInput[]
    update?: PublicationUpdateWithWhereUniqueWithoutProfileInput | PublicationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PublicationUpdateManyWithWhereWithoutProfileInput | PublicationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput> | LicenseCreateWithoutProfileInput[] | LicenseUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProfileInput | LicenseCreateOrConnectWithoutProfileInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutProfileInput | LicenseUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: LicenseCreateManyProfileInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutProfileInput | LicenseUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutProfileInput | LicenseUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput> | VolunteerExperienceCreateWithoutProfileInput[] | VolunteerExperienceUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VolunteerExperienceCreateOrConnectWithoutProfileInput | VolunteerExperienceCreateOrConnectWithoutProfileInput[]
    upsert?: VolunteerExperienceUpsertWithWhereUniqueWithoutProfileInput | VolunteerExperienceUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: VolunteerExperienceCreateManyProfileInputEnvelope
    set?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    disconnect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    delete?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    connect?: VolunteerExperienceWhereUniqueInput | VolunteerExperienceWhereUniqueInput[]
    update?: VolunteerExperienceUpdateWithWhereUniqueWithoutProfileInput | VolunteerExperienceUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: VolunteerExperienceUpdateManyWithWhereWithoutProfileInput | VolunteerExperienceUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: VolunteerExperienceScalarWhereInput | VolunteerExperienceScalarWhereInput[]
  }

  export type OrganizationUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput> | OrganizationCreateWithoutProfileInput[] | OrganizationUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput | OrganizationCreateOrConnectWithoutProfileInput[]
    upsert?: OrganizationUpsertWithWhereUniqueWithoutProfileInput | OrganizationUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: OrganizationCreateManyProfileInputEnvelope
    set?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    disconnect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    delete?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    connect?: OrganizationWhereUniqueInput | OrganizationWhereUniqueInput[]
    update?: OrganizationUpdateWithWhereUniqueWithoutProfileInput | OrganizationUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: OrganizationUpdateManyWithWhereWithoutProfileInput | OrganizationUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput> | ContactCreateWithoutProfileInput[] | ContactUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutProfileInput | ContactCreateOrConnectWithoutProfileInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutProfileInput | ContactUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ContactCreateManyProfileInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutProfileInput | ContactUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutProfileInput | ContactUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type ProfileCreateNestedOneWithoutSkillsInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSkillsInput
    upsert?: ProfileUpsertWithoutSkillsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSkillsInput, ProfileUpdateWithoutSkillsInput>, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfileCreateNestedOneWithoutEducationInput = {
    create?: XOR<ProfileCreateWithoutEducationInput, ProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEducationInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<ProfileCreateWithoutEducationInput, ProfileUncheckedCreateWithoutEducationInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutEducationInput
    upsert?: ProfileUpsertWithoutEducationInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutEducationInput, ProfileUpdateWithoutEducationInput>, ProfileUncheckedUpdateWithoutEducationInput>
  }

  export type ExperienceCreateachievementsInput = {
    set: string[]
  }

  export type ExperienceCreateimagesInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutExperienceInput = {
    create?: XOR<ProfileCreateWithoutExperienceInput, ProfileUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutExperienceInput
    connect?: ProfileWhereUniqueInput
  }

  export type ExperienceUpdateachievementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ExperienceUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<ProfileCreateWithoutExperienceInput, ProfileUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutExperienceInput
    upsert?: ProfileUpsertWithoutExperienceInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutExperienceInput, ProfileUpdateWithoutExperienceInput>, ProfileUncheckedUpdateWithoutExperienceInput>
  }

  export type ProjectCreatetagsInput = {
    set: string[]
  }

  export type ProjectCreateimagesInput = {
    set: string[]
  }

  export type ProjectCreatecollaboratorsInput = {
    set: string[]
  }

  export type ProjectCreateservicesProvidedInput = {
    set: string[]
  }

  export type ProjectCreatetechStackInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ProfileCreateWithoutProjectsInput, ProfileUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProjectUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatecollaboratorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdateservicesProvidedInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProjectUpdatetechStackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type ProfileUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<ProfileCreateWithoutProjectsInput, ProfileUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutProjectsInput
    upsert?: ProfileUpsertWithoutProjectsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutProjectsInput, ProfileUpdateWithoutProjectsInput>, ProfileUncheckedUpdateWithoutProjectsInput>
  }

  export type PublicationCreateauthorsInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutPublicationsInput = {
    create?: XOR<ProfileCreateWithoutPublicationsInput, ProfileUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPublicationsInput
    connect?: ProfileWhereUniqueInput
  }

  export type PublicationUpdateauthorsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutPublicationsNestedInput = {
    create?: XOR<ProfileCreateWithoutPublicationsInput, ProfileUncheckedCreateWithoutPublicationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutPublicationsInput
    upsert?: ProfileUpsertWithoutPublicationsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutPublicationsInput, ProfileUpdateWithoutPublicationsInput>, ProfileUncheckedUpdateWithoutPublicationsInput>
  }

  export type LicenseCreateimagesInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ProfileCreateWithoutLicensesInput, ProfileUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLicensesInput
    connect?: ProfileWhereUniqueInput
  }

  export type LicenseUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ProfileCreateWithoutLicensesInput, ProfileUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutLicensesInput
    upsert?: ProfileUpsertWithoutLicensesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutLicensesInput, ProfileUpdateWithoutLicensesInput>, ProfileUncheckedUpdateWithoutLicensesInput>
  }

  export type VolunteerExperienceCreateachievementsInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutVolunteerExpInput = {
    create?: XOR<ProfileCreateWithoutVolunteerExpInput, ProfileUncheckedCreateWithoutVolunteerExpInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVolunteerExpInput
    connect?: ProfileWhereUniqueInput
  }

  export type VolunteerExperienceUpdateachievementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutVolunteerExpNestedInput = {
    create?: XOR<ProfileCreateWithoutVolunteerExpInput, ProfileUncheckedCreateWithoutVolunteerExpInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVolunteerExpInput
    upsert?: ProfileUpsertWithoutVolunteerExpInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutVolunteerExpInput, ProfileUpdateWithoutVolunteerExpInput>, ProfileUncheckedUpdateWithoutVolunteerExpInput>
  }

  export type ProfileCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<ProfileCreateWithoutOrganizationsInput, ProfileUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutOrganizationsNestedInput = {
    create?: XOR<ProfileCreateWithoutOrganizationsInput, ProfileUncheckedCreateWithoutOrganizationsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationsInput
    upsert?: ProfileUpsertWithoutOrganizationsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutOrganizationsInput, ProfileUpdateWithoutOrganizationsInput>, ProfileUncheckedUpdateWithoutOrganizationsInput>
  }

  export type ProfileCreateNestedOneWithoutContactsInput = {
    create?: XOR<ProfileCreateWithoutContactsInput, ProfileUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutContactsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneWithoutContactsNestedInput = {
    create?: XOR<ProfileCreateWithoutContactsInput, ProfileUncheckedCreateWithoutContactsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutContactsInput
    upsert?: ProfileUpsertWithoutContactsInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutContactsInput, ProfileUpdateWithoutContactsInput>, ProfileUncheckedUpdateWithoutContactsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type SkillCreateWithoutProfileInput = {
    id?: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillCreateOrConnectWithoutProfileInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput>
  }

  export type SkillCreateManyProfileInputEnvelope = {
    data: SkillCreateManyProfileInput | SkillCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutProfileInput = {
    id?: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationUncheckedCreateWithoutProfileInput = {
    id?: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateOrConnectWithoutProfileInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput>
  }

  export type EducationCreateManyProfileInputEnvelope = {
    data: EducationCreateManyProfileInput | EducationCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ExperienceCreateWithoutProfileInput = {
    id?: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUncheckedCreateWithoutProfileInput = {
    id?: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateOrConnectWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput>
  }

  export type ExperienceCreateManyProfileInputEnvelope = {
    data: ExperienceCreateManyProfileInput | ExperienceCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutProfileInput = {
    id?: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutProfileInput = {
    id?: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutProfileInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput>
  }

  export type ProjectCreateManyProfileInputEnvelope = {
    data: ProjectCreateManyProfileInput | ProjectCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type PublicationCreateWithoutProfileInput = {
    id?: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationUncheckedCreateWithoutProfileInput = {
    id?: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationCreateOrConnectWithoutProfileInput = {
    where: PublicationWhereUniqueInput
    create: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput>
  }

  export type PublicationCreateManyProfileInputEnvelope = {
    data: PublicationCreateManyProfileInput | PublicationCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type LicenseCreateWithoutProfileInput = {
    id?: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateOrConnectWithoutProfileInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput>
  }

  export type LicenseCreateManyProfileInputEnvelope = {
    data: LicenseCreateManyProfileInput | LicenseCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerExperienceCreateWithoutProfileInput = {
    id?: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerExperienceUncheckedCreateWithoutProfileInput = {
    id?: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerExperienceCreateOrConnectWithoutProfileInput = {
    where: VolunteerExperienceWhereUniqueInput
    create: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput>
  }

  export type VolunteerExperienceCreateManyProfileInputEnvelope = {
    data: VolunteerExperienceCreateManyProfileInput | VolunteerExperienceCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationCreateWithoutProfileInput = {
    id?: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutProfileInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
  }

  export type OrganizationCreateManyProfileInputEnvelope = {
    data: OrganizationCreateManyProfileInput | OrganizationCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContactUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContactCreateOrConnectWithoutProfileInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput>
  }

  export type ContactCreateManyProfileInputEnvelope = {
    data: ContactCreateManyProfileInput | ContactCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type SkillUpsertWithWhereUniqueWithoutProfileInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutProfileInput, SkillUncheckedUpdateWithoutProfileInput>
    create: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutProfileInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutProfileInput, SkillUncheckedUpdateWithoutProfileInput>
  }

  export type SkillUpdateManyWithWhereWithoutProfileInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutProfileInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    profileId?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    list?: StringNullableFilter<"Skill"> | string | null
    category?: StringNullableFilter<"Skill"> | string | null
    proficiency?: IntNullableFilter<"Skill"> | number | null
    iconSlug?: StringNullableFilter<"Skill"> | string | null
    order?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type EducationUpsertWithWhereUniqueWithoutProfileInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutProfileInput, EducationUncheckedUpdateWithoutProfileInput>
    create: XOR<EducationCreateWithoutProfileInput, EducationUncheckedCreateWithoutProfileInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutProfileInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutProfileInput, EducationUncheckedUpdateWithoutProfileInput>
  }

  export type EducationUpdateManyWithWhereWithoutProfileInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutProfileInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    profileId?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringNullableFilter<"Education"> | string | null
    field?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    isCurrent?: BoolFilter<"Education"> | boolean
    gpa?: StringNullableFilter<"Education"> | string | null
    description?: StringNullableFilter<"Education"> | string | null
    logoUrl?: StringNullableFilter<"Education"> | string | null
    createdAt?: DateTimeFilter<"Education"> | Date | string
    updatedAt?: DateTimeFilter<"Education"> | Date | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutProfileInput, ExperienceUncheckedUpdateWithoutProfileInput>
    create: XOR<ExperienceCreateWithoutProfileInput, ExperienceUncheckedCreateWithoutProfileInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutProfileInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutProfileInput, ExperienceUncheckedUpdateWithoutProfileInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutProfileInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutProfileInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    profileId?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    position?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    locationType?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    description?: StringNullableFilter<"Experience"> | string | null
    achievements?: StringNullableListFilter<"Experience">
    companyUrl?: StringNullableFilter<"Experience"> | string | null
    companyLogo?: StringNullableFilter<"Experience"> | string | null
    employmentType?: StringNullableFilter<"Experience"> | string | null
    images?: StringNullableListFilter<"Experience">
    aiHint?: StringNullableFilter<"Experience"> | string | null
    isPublic?: BoolFilter<"Experience"> | boolean
    order?: IntFilter<"Experience"> | number
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutProfileInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutProfileInput, ProjectUncheckedUpdateWithoutProfileInput>
    create: XOR<ProjectCreateWithoutProfileInput, ProjectUncheckedCreateWithoutProfileInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutProfileInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutProfileInput, ProjectUncheckedUpdateWithoutProfileInput>
  }

  export type ProjectUpdateManyWithWhereWithoutProfileInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutProfileInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    profileId?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    slug?: StringFilter<"Project"> | string
    summary?: StringNullableFilter<"Project"> | string | null
    description?: StringNullableFilter<"Project"> | string | null
    coverImage?: StringNullableFilter<"Project"> | string | null
    gallery?: JsonNullableFilter<"Project">
    body?: JsonNullableFilter<"Project">
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    projectUrl?: StringNullableFilter<"Project"> | string | null
    caseStudyUrl?: StringNullableFilter<"Project"> | string | null
    year?: IntNullableFilter<"Project"> | number | null
    tags?: StringNullableListFilter<"Project">
    images?: StringNullableListFilter<"Project">
    collaborators?: StringNullableListFilter<"Project">
    client?: StringNullableFilter<"Project"> | string | null
    industry?: StringNullableFilter<"Project"> | string | null
    duration?: StringNullableFilter<"Project"> | string | null
    servicesProvided?: StringNullableListFilter<"Project">
    techStack?: StringNullableListFilter<"Project">
    isFeatured?: BoolFilter<"Project"> | boolean
    status?: EnumPublishStatusFilter<"Project"> | $Enums.PublishStatus
    aiHint?: StringNullableFilter<"Project"> | string | null
    publishedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type PublicationUpsertWithWhereUniqueWithoutProfileInput = {
    where: PublicationWhereUniqueInput
    update: XOR<PublicationUpdateWithoutProfileInput, PublicationUncheckedUpdateWithoutProfileInput>
    create: XOR<PublicationCreateWithoutProfileInput, PublicationUncheckedCreateWithoutProfileInput>
  }

  export type PublicationUpdateWithWhereUniqueWithoutProfileInput = {
    where: PublicationWhereUniqueInput
    data: XOR<PublicationUpdateWithoutProfileInput, PublicationUncheckedUpdateWithoutProfileInput>
  }

  export type PublicationUpdateManyWithWhereWithoutProfileInput = {
    where: PublicationScalarWhereInput
    data: XOR<PublicationUpdateManyMutationInput, PublicationUncheckedUpdateManyWithoutProfileInput>
  }

  export type PublicationScalarWhereInput = {
    AND?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    OR?: PublicationScalarWhereInput[]
    NOT?: PublicationScalarWhereInput | PublicationScalarWhereInput[]
    id?: StringFilter<"Publication"> | string
    profileId?: StringFilter<"Publication"> | string
    title?: StringFilter<"Publication"> | string
    publisher?: StringNullableFilter<"Publication"> | string | null
    url?: StringNullableFilter<"Publication"> | string | null
    publishedDate?: DateTimeNullableFilter<"Publication"> | Date | string | null
    description?: StringNullableFilter<"Publication"> | string | null
    authors?: StringNullableListFilter<"Publication">
    doi?: StringNullableFilter<"Publication"> | string | null
    publicationType?: StringNullableFilter<"Publication"> | string | null
    order?: IntFilter<"Publication"> | number
    createdAt?: DateTimeFilter<"Publication"> | Date | string
    updatedAt?: DateTimeFilter<"Publication"> | Date | string
  }

  export type LicenseUpsertWithWhereUniqueWithoutProfileInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutProfileInput, LicenseUncheckedUpdateWithoutProfileInput>
    create: XOR<LicenseCreateWithoutProfileInput, LicenseUncheckedCreateWithoutProfileInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutProfileInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutProfileInput, LicenseUncheckedUpdateWithoutProfileInput>
  }

  export type LicenseUpdateManyWithWhereWithoutProfileInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutProfileInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    profileId?: StringFilter<"License"> | string
    name?: StringFilter<"License"> | string
    issuer?: StringFilter<"License"> | string
    url?: StringNullableFilter<"License"> | string | null
    issueDate?: DateTimeNullableFilter<"License"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"License"> | Date | string | null
    doesNotExpire?: BoolFilter<"License"> | boolean
    credentialId?: StringNullableFilter<"License"> | string | null
    credentialUrl?: StringNullableFilter<"License"> | string | null
    logoUrl?: StringNullableFilter<"License"> | string | null
    images?: StringNullableListFilter<"License">
    aiHint?: StringNullableFilter<"License"> | string | null
    order?: IntFilter<"License"> | number
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
  }

  export type VolunteerExperienceUpsertWithWhereUniqueWithoutProfileInput = {
    where: VolunteerExperienceWhereUniqueInput
    update: XOR<VolunteerExperienceUpdateWithoutProfileInput, VolunteerExperienceUncheckedUpdateWithoutProfileInput>
    create: XOR<VolunteerExperienceCreateWithoutProfileInput, VolunteerExperienceUncheckedCreateWithoutProfileInput>
  }

  export type VolunteerExperienceUpdateWithWhereUniqueWithoutProfileInput = {
    where: VolunteerExperienceWhereUniqueInput
    data: XOR<VolunteerExperienceUpdateWithoutProfileInput, VolunteerExperienceUncheckedUpdateWithoutProfileInput>
  }

  export type VolunteerExperienceUpdateManyWithWhereWithoutProfileInput = {
    where: VolunteerExperienceScalarWhereInput
    data: XOR<VolunteerExperienceUpdateManyMutationInput, VolunteerExperienceUncheckedUpdateManyWithoutProfileInput>
  }

  export type VolunteerExperienceScalarWhereInput = {
    AND?: VolunteerExperienceScalarWhereInput | VolunteerExperienceScalarWhereInput[]
    OR?: VolunteerExperienceScalarWhereInput[]
    NOT?: VolunteerExperienceScalarWhereInput | VolunteerExperienceScalarWhereInput[]
    id?: StringFilter<"VolunteerExperience"> | string
    profileId?: StringFilter<"VolunteerExperience"> | string
    organization?: StringFilter<"VolunteerExperience"> | string
    role?: StringFilter<"VolunteerExperience"> | string
    cause?: StringNullableFilter<"VolunteerExperience"> | string | null
    location?: StringNullableFilter<"VolunteerExperience"> | string | null
    startDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    endDate?: DateTimeNullableFilter<"VolunteerExperience"> | Date | string | null
    isCurrent?: BoolFilter<"VolunteerExperience"> | boolean
    description?: StringNullableFilter<"VolunteerExperience"> | string | null
    achievements?: StringNullableListFilter<"VolunteerExperience">
    order?: IntFilter<"VolunteerExperience"> | number
    createdAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
    updatedAt?: DateTimeFilter<"VolunteerExperience"> | Date | string
  }

  export type OrganizationUpsertWithWhereUniqueWithoutProfileInput = {
    where: OrganizationWhereUniqueInput
    update: XOR<OrganizationUpdateWithoutProfileInput, OrganizationUncheckedUpdateWithoutProfileInput>
    create: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
  }

  export type OrganizationUpdateWithWhereUniqueWithoutProfileInput = {
    where: OrganizationWhereUniqueInput
    data: XOR<OrganizationUpdateWithoutProfileInput, OrganizationUncheckedUpdateWithoutProfileInput>
  }

  export type OrganizationUpdateManyWithWhereWithoutProfileInput = {
    where: OrganizationScalarWhereInput
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyWithoutProfileInput>
  }

  export type OrganizationScalarWhereInput = {
    AND?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    OR?: OrganizationScalarWhereInput[]
    NOT?: OrganizationScalarWhereInput | OrganizationScalarWhereInput[]
    id?: StringFilter<"Organization"> | string
    profileId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    role?: StringNullableFilter<"Organization"> | string | null
    url?: StringNullableFilter<"Organization"> | string | null
    logoUrl?: StringNullableFilter<"Organization"> | string | null
    location?: StringNullableFilter<"Organization"> | string | null
    startDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Organization"> | Date | string | null
    isCurrent?: BoolFilter<"Organization"> | boolean
    description?: StringNullableFilter<"Organization"> | string | null
    order?: IntFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutProfileInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutProfileInput, ContactUncheckedUpdateWithoutProfileInput>
    create: XOR<ContactCreateWithoutProfileInput, ContactUncheckedCreateWithoutProfileInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutProfileInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutProfileInput, ContactUncheckedUpdateWithoutProfileInput>
  }

  export type ContactUpdateManyWithWhereWithoutProfileInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutProfileInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    profileId?: StringNullableFilter<"Contact"> | string | null
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    isRead?: BoolFilter<"Contact"> | boolean
    repliedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ProfileCreateWithoutSkillsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSkillsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutSkillsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
  }

  export type ProfileUpsertWithoutSkillsInput = {
    update: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
    create: XOR<ProfileCreateWithoutSkillsInput, ProfileUncheckedCreateWithoutSkillsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSkillsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSkillsInput, ProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type ProfileUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutEducationInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutEducationInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutEducationInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutEducationInput, ProfileUncheckedCreateWithoutEducationInput>
  }

  export type ProfileUpsertWithoutEducationInput = {
    update: XOR<ProfileUpdateWithoutEducationInput, ProfileUncheckedUpdateWithoutEducationInput>
    create: XOR<ProfileCreateWithoutEducationInput, ProfileUncheckedCreateWithoutEducationInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutEducationInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutEducationInput, ProfileUncheckedUpdateWithoutEducationInput>
  }

  export type ProfileUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutExperienceInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutExperienceInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutExperienceInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutExperienceInput, ProfileUncheckedCreateWithoutExperienceInput>
  }

  export type ProfileUpsertWithoutExperienceInput = {
    update: XOR<ProfileUpdateWithoutExperienceInput, ProfileUncheckedUpdateWithoutExperienceInput>
    create: XOR<ProfileCreateWithoutExperienceInput, ProfileUncheckedCreateWithoutExperienceInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutExperienceInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutExperienceInput, ProfileUncheckedUpdateWithoutExperienceInput>
  }

  export type ProfileUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutProjectsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutProjectsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutProjectsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutProjectsInput, ProfileUncheckedCreateWithoutProjectsInput>
  }

  export type ProfileUpsertWithoutProjectsInput = {
    update: XOR<ProfileUpdateWithoutProjectsInput, ProfileUncheckedUpdateWithoutProjectsInput>
    create: XOR<ProfileCreateWithoutProjectsInput, ProfileUncheckedCreateWithoutProjectsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutProjectsInput, ProfileUncheckedUpdateWithoutProjectsInput>
  }

  export type ProfileUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutPublicationsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutPublicationsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutPublicationsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutPublicationsInput, ProfileUncheckedCreateWithoutPublicationsInput>
  }

  export type ProfileUpsertWithoutPublicationsInput = {
    update: XOR<ProfileUpdateWithoutPublicationsInput, ProfileUncheckedUpdateWithoutPublicationsInput>
    create: XOR<ProfileCreateWithoutPublicationsInput, ProfileUncheckedCreateWithoutPublicationsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutPublicationsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutPublicationsInput, ProfileUncheckedUpdateWithoutPublicationsInput>
  }

  export type ProfileUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutPublicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutLicensesInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutLicensesInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutLicensesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutLicensesInput, ProfileUncheckedCreateWithoutLicensesInput>
  }

  export type ProfileUpsertWithoutLicensesInput = {
    update: XOR<ProfileUpdateWithoutLicensesInput, ProfileUncheckedUpdateWithoutLicensesInput>
    create: XOR<ProfileCreateWithoutLicensesInput, ProfileUncheckedCreateWithoutLicensesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutLicensesInput, ProfileUncheckedUpdateWithoutLicensesInput>
  }

  export type ProfileUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutVolunteerExpInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutVolunteerExpInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutVolunteerExpInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutVolunteerExpInput, ProfileUncheckedCreateWithoutVolunteerExpInput>
  }

  export type ProfileUpsertWithoutVolunteerExpInput = {
    update: XOR<ProfileUpdateWithoutVolunteerExpInput, ProfileUncheckedUpdateWithoutVolunteerExpInput>
    create: XOR<ProfileCreateWithoutVolunteerExpInput, ProfileUncheckedCreateWithoutVolunteerExpInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutVolunteerExpInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutVolunteerExpInput, ProfileUncheckedUpdateWithoutVolunteerExpInput>
  }

  export type ProfileUpdateWithoutVolunteerExpInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutVolunteerExpInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutOrganizationsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    contacts?: ContactCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutOrganizationsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    contacts?: ContactUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutOrganizationsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutOrganizationsInput, ProfileUncheckedCreateWithoutOrganizationsInput>
  }

  export type ProfileUpsertWithoutOrganizationsInput = {
    update: XOR<ProfileUpdateWithoutOrganizationsInput, ProfileUncheckedUpdateWithoutOrganizationsInput>
    create: XOR<ProfileCreateWithoutOrganizationsInput, ProfileUncheckedCreateWithoutOrganizationsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutOrganizationsInput, ProfileUncheckedUpdateWithoutOrganizationsInput>
  }

  export type ProfileUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    contacts?: ContactUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutContactsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    education?: EducationCreateNestedManyWithoutProfileInput
    experience?: ExperienceCreateNestedManyWithoutProfileInput
    projects?: ProjectCreateNestedManyWithoutProfileInput
    publications?: PublicationCreateNestedManyWithoutProfileInput
    licenses?: LicenseCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceCreateNestedManyWithoutProfileInput
    organizations?: OrganizationCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutContactsInput = {
    id?: string
    slug?: string
    fullName?: string
    headline?: string
    summary?: string
    location?: string
    phone?: string
    email?: string
    birthDate?: Date | string | null
    website?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    twitterUrl?: string | null
    instagramUrl?: string | null
    tiktokUrl?: string | null
    facebookUrl?: string | null
    youtubeUrl?: string | null
    mediumUrl?: string | null
    avatarUrl?: string | null
    resumeUrl?: string | null
    heroSubtitle?: string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileCreatevisibleSectionsInput | string[]
    activeTheme?: string | null
    showPhoto?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    education?: EducationUncheckedCreateNestedManyWithoutProfileInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutProfileInput
    projects?: ProjectUncheckedCreateNestedManyWithoutProfileInput
    publications?: PublicationUncheckedCreateNestedManyWithoutProfileInput
    licenses?: LicenseUncheckedCreateNestedManyWithoutProfileInput
    volunteerExp?: VolunteerExperienceUncheckedCreateNestedManyWithoutProfileInput
    organizations?: OrganizationUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutContactsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutContactsInput, ProfileUncheckedCreateWithoutContactsInput>
  }

  export type ProfileUpsertWithoutContactsInput = {
    update: XOR<ProfileUpdateWithoutContactsInput, ProfileUncheckedUpdateWithoutContactsInput>
    create: XOR<ProfileCreateWithoutContactsInput, ProfileUncheckedCreateWithoutContactsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutContactsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutContactsInput, ProfileUncheckedUpdateWithoutContactsInput>
  }

  export type ProfileUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    education?: EducationUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUpdateManyWithoutProfileNestedInput
    projects?: ProjectUpdateManyWithoutProfileNestedInput
    publications?: PublicationUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    mediumUrl?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSequences?: NullableJsonNullValueInput | InputJsonValue
    visibleSections?: ProfileUpdatevisibleSectionsInput | string[]
    activeTheme?: NullableStringFieldUpdateOperationsInput | string | null
    showPhoto?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    education?: EducationUncheckedUpdateManyWithoutProfileNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutProfileNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutProfileNestedInput
    publications?: PublicationUncheckedUpdateManyWithoutProfileNestedInput
    licenses?: LicenseUncheckedUpdateManyWithoutProfileNestedInput
    volunteerExp?: VolunteerExperienceUncheckedUpdateManyWithoutProfileNestedInput
    organizations?: OrganizationUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type SkillCreateManyProfileInput = {
    id?: string
    name: string
    list?: string | null
    category?: string | null
    proficiency?: number | null
    iconSlug?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EducationCreateManyProfileInput = {
    id?: string
    institution: string
    degree?: string | null
    field?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    gpa?: string | null
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateManyProfileInput = {
    id?: string
    company: string
    position: string
    location?: string | null
    locationType?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: ExperienceCreateachievementsInput | string[]
    companyUrl?: string | null
    companyLogo?: string | null
    employmentType?: string | null
    images?: ExperienceCreateimagesInput | string[]
    aiHint?: string | null
    isPublic?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyProfileInput = {
    id?: string
    title: string
    slug: string
    summary?: string | null
    description?: string | null
    coverImage?: string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: string | null
    githubUrl?: string | null
    projectUrl?: string | null
    caseStudyUrl?: string | null
    year?: number | null
    tags?: ProjectCreatetagsInput | string[]
    images?: ProjectCreateimagesInput | string[]
    collaborators?: ProjectCreatecollaboratorsInput | string[]
    client?: string | null
    industry?: string | null
    duration?: string | null
    servicesProvided?: ProjectCreateservicesProvidedInput | string[]
    techStack?: ProjectCreatetechStackInput | string[]
    isFeatured?: boolean
    status?: $Enums.PublishStatus
    aiHint?: string | null
    publishedAt?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublicationCreateManyProfileInput = {
    id?: string
    title: string
    publisher?: string | null
    url?: string | null
    publishedDate?: Date | string | null
    description?: string | null
    authors?: PublicationCreateauthorsInput | string[]
    doi?: string | null
    publicationType?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseCreateManyProfileInput = {
    id?: string
    name: string
    issuer: string
    url?: string | null
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    doesNotExpire?: boolean
    credentialId?: string | null
    credentialUrl?: string | null
    logoUrl?: string | null
    images?: LicenseCreateimagesInput | string[]
    aiHint?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerExperienceCreateManyProfileInput = {
    id?: string
    organization: string
    role: string
    cause?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    achievements?: VolunteerExperienceCreateachievementsInput | string[]
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateManyProfileInput = {
    id?: string
    name: string
    role?: string | null
    url?: string | null
    logoUrl?: string | null
    location?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    isCurrent?: boolean
    description?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactCreateManyProfileInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SkillUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    list?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    proficiency?: NullableIntFieldUpdateOperationsInput | number | null
    iconSlug?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EducationUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: NullableStringFieldUpdateOperationsInput | string | null
    field?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    gpa?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: ExperienceUpdateachievementsInput | string[]
    companyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    companyLogo?: NullableStringFieldUpdateOperationsInput | string | null
    employmentType?: NullableStringFieldUpdateOperationsInput | string | null
    images?: ExperienceUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    gallery?: NullableJsonNullValueInput | InputJsonValue
    body?: NullableJsonNullValueInput | InputJsonValue
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    projectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    caseStudyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: ProjectUpdatetagsInput | string[]
    images?: ProjectUpdateimagesInput | string[]
    collaborators?: ProjectUpdatecollaboratorsInput | string[]
    client?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    servicesProvided?: ProjectUpdateservicesProvidedInput | string[]
    techStack?: ProjectUpdatetechStackInput | string[]
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicationUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    publisher?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    publishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    authors?: PublicationUpdateauthorsInput | string[]
    doi?: NullableStringFieldUpdateOperationsInput | string | null
    publicationType?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    doesNotExpire?: BoolFieldUpdateOperationsInput | boolean
    credentialId?: NullableStringFieldUpdateOperationsInput | string | null
    credentialUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    images?: LicenseUpdateimagesInput | string[]
    aiHint?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerExperienceUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    cause?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    achievements?: VolunteerExperienceUpdateachievementsInput | string[]
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}