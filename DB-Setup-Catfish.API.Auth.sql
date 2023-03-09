IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [CF_Auth_AspNetRoles] (
    [Id] nvarchar(450) NOT NULL,
    [Name] nvarchar(256) NULL,
    [NormalizedName] nvarchar(256) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    CONSTRAINT [PK_CF_Auth_AspNetRoles] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [CF_Auth_AspNetUsers] (
    [Id] nvarchar(450) NOT NULL,
    [UserName] nvarchar(256) NULL,
    [NormalizedUserName] nvarchar(256) NULL,
    [Email] nvarchar(256) NULL,
    [NormalizedEmail] nvarchar(256) NULL,
    [EmailConfirmed] bit NOT NULL,
    [PasswordHash] nvarchar(max) NULL,
    [SecurityStamp] nvarchar(max) NULL,
    [ConcurrencyStamp] nvarchar(max) NULL,
    [PhoneNumber] nvarchar(max) NULL,
    [PhoneNumberConfirmed] bit NOT NULL,
    [TwoFactorEnabled] bit NOT NULL,
    [LockoutEnd] datetimeoffset NULL,
    [LockoutEnabled] bit NOT NULL,
    [AccessFailedCount] int NOT NULL,
    CONSTRAINT [PK_CF_Auth_AspNetUsers] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [CF_Auth_Tenants] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_CF_Auth_Tenants] PRIMARY KEY ([Id])
);
GO

CREATE TABLE [CF_Auth_AspNetRoleClaims] (
    [Id] int NOT NULL IDENTITY,
    [RoleId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_CF_Auth_AspNetRoleClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CF_Auth_AspNetRoleClaims_CF_Auth_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [CF_Auth_AspNetRoles] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_AspNetUserClaims] (
    [Id] int NOT NULL IDENTITY,
    [UserId] nvarchar(450) NOT NULL,
    [ClaimType] nvarchar(max) NULL,
    [ClaimValue] nvarchar(max) NULL,
    CONSTRAINT [PK_CF_Auth_AspNetUserClaims] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CF_Auth_AspNetUserClaims_CF_Auth_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [CF_Auth_AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_AspNetUserLogins] (
    [LoginProvider] nvarchar(450) NOT NULL,
    [ProviderKey] nvarchar(450) NOT NULL,
    [ProviderDisplayName] nvarchar(max) NULL,
    [UserId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_CF_Auth_AspNetUserLogins] PRIMARY KEY ([LoginProvider], [ProviderKey]),
    CONSTRAINT [FK_CF_Auth_AspNetUserLogins_CF_Auth_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [CF_Auth_AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_AspNetUserRoles] (
    [UserId] nvarchar(450) NOT NULL,
    [RoleId] nvarchar(450) NOT NULL,
    CONSTRAINT [PK_CF_Auth_AspNetUserRoles] PRIMARY KEY ([UserId], [RoleId]),
    CONSTRAINT [FK_CF_Auth_AspNetUserRoles_CF_Auth_AspNetRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [CF_Auth_AspNetRoles] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_CF_Auth_AspNetUserRoles_CF_Auth_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [CF_Auth_AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_AspNetUserTokens] (
    [UserId] nvarchar(450) NOT NULL,
    [LoginProvider] nvarchar(450) NOT NULL,
    [Name] nvarchar(450) NOT NULL,
    [Value] nvarchar(max) NULL,
    CONSTRAINT [PK_CF_Auth_AspNetUserTokens] PRIMARY KEY ([UserId], [LoginProvider], [Name]),
    CONSTRAINT [FK_CF_Auth_AspNetUserTokens_CF_Auth_AspNetUsers_UserId] FOREIGN KEY ([UserId]) REFERENCES [CF_Auth_AspNetUsers] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_TenantRoles] (
    [Id] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NOT NULL,
    [Description] nvarchar(max) NOT NULL,
    [TenantId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CF_Auth_TenantRoles] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CF_Auth_TenantRoles_CF_Auth_Tenants_TenantId] FOREIGN KEY ([TenantId]) REFERENCES [CF_Auth_Tenants] ([Id]) ON DELETE CASCADE
);
GO

CREATE TABLE [CF_Auth_TenantUsers] (
    [Id] uniqueidentifier NOT NULL,
    [IdentityUserId] nvarchar(max) NOT NULL,
    [UserName] nvarchar(max) NOT NULL,
    [Email] nvarchar(max) NOT NULL,
    [RoleId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_CF_Auth_TenantUsers] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_CF_Auth_TenantUsers_CF_Auth_TenantRoles_RoleId] FOREIGN KEY ([RoleId]) REFERENCES [CF_Auth_TenantRoles] ([Id]) ON DELETE CASCADE
);
GO

CREATE INDEX [IX_CF_Auth_AspNetRoleClaims_RoleId] ON [CF_Auth_AspNetRoleClaims] ([RoleId]);
GO

CREATE UNIQUE INDEX [RoleNameIndex] ON [CF_Auth_AspNetRoles] ([NormalizedName]) WHERE [NormalizedName] IS NOT NULL;
GO

CREATE INDEX [IX_CF_Auth_AspNetUserClaims_UserId] ON [CF_Auth_AspNetUserClaims] ([UserId]);
GO

CREATE INDEX [IX_CF_Auth_AspNetUserLogins_UserId] ON [CF_Auth_AspNetUserLogins] ([UserId]);
GO

CREATE INDEX [IX_CF_Auth_AspNetUserRoles_RoleId] ON [CF_Auth_AspNetUserRoles] ([RoleId]);
GO

CREATE INDEX [EmailIndex] ON [CF_Auth_AspNetUsers] ([NormalizedEmail]);
GO

CREATE UNIQUE INDEX [UserNameIndex] ON [CF_Auth_AspNetUsers] ([NormalizedUserName]) WHERE [NormalizedUserName] IS NOT NULL;
GO

CREATE INDEX [IX_CF_Auth_TenantRoles_TenantId] ON [CF_Auth_TenantRoles] ([TenantId]);
GO

CREATE INDEX [IX_CF_Auth_TenantUsers_RoleId] ON [CF_Auth_TenantUsers] ([RoleId]);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230225191038_CreatedAuthorizationModels', N'6.0.7');
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[CF_Auth_Tenants]') AND [c].[name] = N'Description');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [CF_Auth_Tenants] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [CF_Auth_Tenants] ALTER COLUMN [Description] nvarchar(max) NULL;
GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[CF_Auth_TenantRoles]') AND [c].[name] = N'Description');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [CF_Auth_TenantRoles] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [CF_Auth_TenantRoles] ALTER COLUMN [Description] nvarchar(max) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230225234229_MadeDescriptionFieldNullable', N'6.0.7');
GO

COMMIT;
GO

