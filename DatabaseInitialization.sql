IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Catfish_Entities] (
    [Id] uniqueidentifier NOT NULL,
    [Content] xml NULL,
    [Created] datetime2 NOT NULL,
    [Updated] datetime2 NULL,
    [Discriminator] nvarchar(max) NOT NULL,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Catfish_Entities] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Catfish_Relationships] (
    [SubjectId] uniqueidentifier NOT NULL,
    [ObjctId] uniqueidentifier NOT NULL,
    [Predicate] nvarchar(max) NULL,
    CONSTRAINT [PK_Catfish_Relationships] PRIMARY KEY ([SubjectId], [ObjctId]),
    CONSTRAINT [FK_Catfish_Relationships_Catfish_Entities_ObjctId] FOREIGN KEY ([ObjctId]) REFERENCES [Catfish_Entities] ([Id]),
    CONSTRAINT [FK_Catfish_Relationships_Catfish_Entities_SubjectId] FOREIGN KEY ([SubjectId]) REFERENCES [Catfish_Entities] ([Id])
);

GO

CREATE INDEX [IX_Catfish_Relationships_ObjctId] ON [Catfish_Relationships] ([ObjctId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200228154957_CreateBasicDataModels', N'3.1.3');

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_Entities]') AND [c].[name] = N'Name');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_Entities] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [Catfish_Entities] DROP COLUMN [Name];

GO

ALTER TABLE [Catfish_Entities] ADD [TypeName] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200314221203_ChangedEntityNameToEntityTypeName', N'3.1.3');

GO

ALTER TABLE [Catfish_Entities] ADD [PrimaryCollectionId] uniqueidentifier NULL;

GO

CREATE INDEX [IX_Catfish_Entities_PrimaryCollectionId] ON [Catfish_Entities] ([PrimaryCollectionId]);

GO

ALTER TABLE [Catfish_Entities] ADD CONSTRAINT [FK_Catfish_Entities_Catfish_Entities_PrimaryCollectionId] FOREIGN KEY ([PrimaryCollectionId]) REFERENCES [Catfish_Entities] ([Id]) ON DELETE NO ACTION;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200327040228_AddedPrimaryCollectionToEntityModel', N'3.1.3');

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_Entities]') AND [c].[name] = N'TypeName');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_Entities] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [Catfish_Entities] DROP COLUMN [TypeName];

GO

ALTER TABLE [Catfish_Entities] ADD [TargetType] nvarchar(max) NULL;

GO

ALTER TABLE [Catfish_Entities] ADD [TemplateName] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200327062110_AddedTargetTypeToEntityTemplate', N'3.1.3');

GO

CREATE TABLE [Catfish_XmlModels] (
    [Id] uniqueidentifier NOT NULL,
    [Created] datetime2 NOT NULL,
    [Updated] datetime2 NULL,
    [Content] xml NULL,
    [Discriminator] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Catfish_XmlModels] PRIMARY KEY ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200619224145_AddedXmlModelsToDbSet', N'3.1.3');

GO

DROP TABLE [Catfish_XmlModels];

GO

DECLARE @var2 sysname;
SELECT @var2 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_Entities]') AND [c].[name] = N'Updated');
IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_Entities] DROP CONSTRAINT [' + @var2 + '];');
ALTER TABLE [Catfish_Entities] DROP COLUMN [Updated];

GO

CREATE TABLE [Catfish_SystemPages] (
    [Id] int NOT NULL IDENTITY,
    [SiteId] uniqueidentifier NOT NULL,
    [PageId] uniqueidentifier NOT NULL,
    [PageKey] nvarchar(max) NULL,
    CONSTRAINT [PK_Catfish_SystemPages] PRIMARY KEY ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200916154803_CreatedSystemPagesModel', N'3.1.3');

GO

CREATE TABLE [Catfish_Groups] (
    [Id] uniqueidentifier NOT NULL,
    [EntityTemplateId] uniqueidentifier NOT NULL,
    [Name] nvarchar(max) NULL,
    CONSTRAINT [PK_Catfish_Groups] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Catfish_Groups_Catfish_Entities_EntityTemplateId] FOREIGN KEY ([EntityTemplateId]) REFERENCES [Catfish_Entities] ([Id]) ON DELETE CASCADE
);

GO

CREATE TABLE [Catfish_UserGroups] (
    [Id] uniqueidentifier NOT NULL,
    [GroupId] uniqueidentifier NOT NULL,
    [UserId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Catfish_UserGroups] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Catfish_UserGroups_Catfish_Groups_GroupId] FOREIGN KEY ([GroupId]) REFERENCES [Catfish_Groups] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Catfish_Groups_EntityTemplateId] ON [Catfish_Groups] ([EntityTemplateId]);

GO

CREATE INDEX [IX_Catfish_UserGroups_GroupId] ON [Catfish_UserGroups] ([GroupId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200916230956_CreatedUserGrouping', N'3.1.3');

GO

ALTER TABLE [Catfish_UserGroups] DROP CONSTRAINT [FK_Catfish_UserGroups_Catfish_Groups_GroupId];

GO

ALTER TABLE [Catfish_UserGroups] DROP CONSTRAINT [PK_Catfish_UserGroups];

GO

EXEC sp_rename N'[Catfish_UserGroups]', N'Catfish_UserGroupRoles';

GO

EXEC sp_rename N'[Catfish_UserGroupRoles].[IX_Catfish_UserGroups_GroupId]', N'IX_Catfish_UserGroupRoles_GroupId', N'INDEX';

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD [RoleId] uniqueidentifier NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD CONSTRAINT [PK_Catfish_UserGroupRoles] PRIMARY KEY ([Id]);

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD CONSTRAINT [FK_Catfish_UserGroupRoles_Catfish_Groups_GroupId] FOREIGN KEY ([GroupId]) REFERENCES [Catfish_Groups] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200917173244_UpdateUserGroupTable', N'3.1.3');

GO

ALTER TABLE [Catfish_Groups] DROP CONSTRAINT [FK_Catfish_Groups_Catfish_Entities_EntityTemplateId];

GO

DROP INDEX [IX_Catfish_Groups_EntityTemplateId] ON [Catfish_Groups];

GO

DECLARE @var3 sysname;
SELECT @var3 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_Groups]') AND [c].[name] = N'EntityTemplateId');
IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_Groups] DROP CONSTRAINT [' + @var3 + '];');
ALTER TABLE [Catfish_Groups] DROP COLUMN [EntityTemplateId];

GO

ALTER TABLE [Catfish_Groups] ADD [Status] nvarchar(max) NULL;

GO

CREATE TABLE [Catfish_GroupTemplates] (
    [Id] uniqueidentifier NOT NULL,
    [GroupId] uniqueidentifier NOT NULL,
    [EntityTemplateId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Catfish_GroupTemplates] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Catfish_GroupTemplates_Catfish_Entities_EntityTemplateId] FOREIGN KEY ([EntityTemplateId]) REFERENCES [Catfish_Entities] ([Id]) ON DELETE CASCADE,
    CONSTRAINT [FK_Catfish_GroupTemplates_Catfish_Groups_GroupId] FOREIGN KEY ([GroupId]) REFERENCES [Catfish_Groups] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Catfish_GroupTemplates_EntityTemplateId] ON [Catfish_GroupTemplates] ([EntityTemplateId]);

GO

CREATE INDEX [IX_Catfish_GroupTemplates_GroupId] ON [Catfish_GroupTemplates] ([GroupId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200918210822_AddGroupTemplates', N'3.1.3');

GO

DECLARE @var4 sysname;
SELECT @var4 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_Groups]') AND [c].[name] = N'Status');
IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_Groups] DROP CONSTRAINT [' + @var4 + '];');
ALTER TABLE [Catfish_Groups] DROP COLUMN [Status];

GO

ALTER TABLE [Catfish_Groups] ADD [GroupStatus] int NOT NULL DEFAULT 0;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200925160649_UpdateGroupTable', N'3.1.3');

GO

CREATE TABLE [Catfish_GroupRoles] (
    [Id] uniqueidentifier NOT NULL,
    [GroupId] uniqueidentifier NOT NULL,
    [RoleId] uniqueidentifier NOT NULL,
    CONSTRAINT [PK_Catfish_GroupRoles] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Catfish_GroupRoles_Catfish_Groups_GroupId] FOREIGN KEY ([GroupId]) REFERENCES [Catfish_Groups] ([Id]) ON DELETE CASCADE
);

GO

CREATE INDEX [IX_Catfish_GroupRoles_GroupId] ON [Catfish_GroupRoles] ([GroupId]);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200929010232_AddGroupRoleTable', N'3.1.3');

GO

CREATE TABLE [Catfish_Forms] (
    [Id] uniqueidentifier NOT NULL,
    [Created] datetime2 NOT NULL,
    [Updated] datetime2 NULL,
    [Content] xml NULL,
    [FormName] nvarchar(max) NULL,
    CONSTRAINT [PK_Catfish_Forms] PRIMARY KEY ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201002053435_AddedFormsTable', N'3.1.3');

GO

ALTER TABLE [Catfish_UserGroupRoles] DROP CONSTRAINT [FK_Catfish_UserGroupRoles_Catfish_Groups_GroupId];

GO

DROP INDEX [IX_Catfish_UserGroupRoles_GroupId] ON [Catfish_UserGroupRoles];

GO

DECLARE @var5 sysname;
SELECT @var5 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_UserGroupRoles]') AND [c].[name] = N'GroupId');
IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_UserGroupRoles] DROP CONSTRAINT [' + @var5 + '];');
ALTER TABLE [Catfish_UserGroupRoles] DROP COLUMN [GroupId];

GO

DECLARE @var6 sysname;
SELECT @var6 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_UserGroupRoles]') AND [c].[name] = N'RoleId');
IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_UserGroupRoles] DROP CONSTRAINT [' + @var6 + '];');
ALTER TABLE [Catfish_UserGroupRoles] DROP COLUMN [RoleId];

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD [GroupRoleId] uniqueidentifier NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';

GO

CREATE INDEX [IX_Catfish_UserGroupRoles_GroupRoleId] ON [Catfish_UserGroupRoles] ([GroupRoleId]);

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD CONSTRAINT [FK_Catfish_UserGroupRoles_Catfish_GroupRoles_GroupRoleId] FOREIGN KEY ([GroupRoleId]) REFERENCES [Catfish_GroupRoles] ([Id]) ON DELETE CASCADE;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201002155005_UpdatedUserGroupRoleModel', N'3.1.3');

GO

ALTER TABLE [Catfish_UserGroupRoles] ADD [GroupId] uniqueidentifier NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201005174204_AddedGroupIdToUserGroupRoleTable', N'3.1.3');

GO

DECLARE @var7 sysname;
SELECT @var7 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Catfish_UserGroupRoles]') AND [c].[name] = N'GroupId');
IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [Catfish_UserGroupRoles] DROP CONSTRAINT [' + @var7 + '];');
ALTER TABLE [Catfish_UserGroupRoles] DROP COLUMN [GroupId];

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201012075804_RemovedGroupIdFromUserGroupRole', N'3.1.3');

GO

ALTER TABLE [Catfish_Entities] ADD [Domain] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20201013055946_AddedDomainsPropertyToEntityTemplate', N'3.1.3');

GO

