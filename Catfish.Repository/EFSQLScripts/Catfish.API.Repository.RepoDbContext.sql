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

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220717181837_CreatedFormModel')
BEGIN
    CREATE TABLE [CF_Repo_Forms] (
        [Id] uniqueidentifier NOT NULL,
        [Status] int NOT NULL,
        [Name] nvarchar(max) NULL,
        [Description] nvarchar(max) NULL,
        [Created] datetime2 NOT NULL,
        [Updated] datetime2 NOT NULL,
        [SerializedFields] nvarchar(max) NULL,
        CONSTRAINT [PK_CF_Repo_Forms] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220717181837_CreatedFormModel')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220717181837_CreatedFormModel', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220803212841_CreatedFormDataModel')
BEGIN
    CREATE TABLE [CF_Repo_FormData] (
        [Id] uniqueidentifier NOT NULL,
        [FormId] uniqueidentifier NOT NULL,
        [Created] datetime2 NOT NULL,
        [Updated] datetime2 NOT NULL,
        [SerializedFieldData] nvarchar(max) NULL,
        CONSTRAINT [PK_CF_Repo_FormData] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220803212841_CreatedFormDataModel')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220803212841_CreatedFormDataModel', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE TABLE [CF_Repo_EntityTemplates] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        [State] int NOT NULL,
        [Created] datetime2 NOT NULL,
        [Updated] datetime2 NULL,
        [SerializedEntityTemplateSettings] nvarchar(max) NULL,
        CONSTRAINT [PK_CF_Repo_EntityTemplates] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE TABLE [CF_Repo_Entities] (
        [Id] uniqueidentifier NOT NULL,
        [EntityType] int NOT NULL,
        [SerializedData] nvarchar(max) NULL,
        [TemplateId] uniqueidentifier NOT NULL,
        [Created] datetime2 NOT NULL,
        [Updated] datetime2 NOT NULL,
        [Title] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_CF_Repo_Entities] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_CF_Repo_Entities_CF_Repo_EntityTemplates_TemplateId] FOREIGN KEY ([TemplateId]) REFERENCES [CF_Repo_EntityTemplates] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE TABLE [CF_Repo_EntityTemplateFormTemplate] (
        [EntityTemplatesId] uniqueidentifier NOT NULL,
        [FormsId] uniqueidentifier NOT NULL,
        CONSTRAINT [PK_CF_Repo_EntityTemplateFormTemplate] PRIMARY KEY ([EntityTemplatesId], [FormsId]),
        CONSTRAINT [FK_CF_Repo_EntityTemplateFormTemplate_CF_Repo_EntityTemplates_EntityTemplatesId] FOREIGN KEY ([EntityTemplatesId]) REFERENCES [CF_Repo_EntityTemplates] ([Id]) ON DELETE CASCADE,
        CONSTRAINT [FK_CF_Repo_EntityTemplateFormTemplate_CF_Repo_Forms_FormsId] FOREIGN KEY ([FormsId]) REFERENCES [CF_Repo_Forms] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE TABLE [CF_Repo_Relationships] (
        [SubjectEntityId] uniqueidentifier NOT NULL,
        [ObjectEntityId] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Order] int NOT NULL,
        CONSTRAINT [PK_CF_Repo_Relationships] PRIMARY KEY ([SubjectEntityId]),
        CONSTRAINT [FK_CF_Repo_Relationships_CF_Repo_Entities_ObjectEntityId] FOREIGN KEY ([ObjectEntityId]) REFERENCES [CF_Repo_Entities] ([Id]) ON DELETE NO ACTION,
        CONSTRAINT [FK_CF_Repo_Relationships_CF_Repo_Entities_SubjectEntityId] FOREIGN KEY ([SubjectEntityId]) REFERENCES [CF_Repo_Entities] ([Id]) ON DELETE CASCADE
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE INDEX [IX_CF_Repo_Entities_TemplateId] ON [CF_Repo_Entities] ([TemplateId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE INDEX [IX_CF_Repo_EntityTemplateFormTemplate_FormsId] ON [CF_Repo_EntityTemplateFormTemplate] ([FormsId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    CREATE INDEX [IX_CF_Repo_Relationships_ObjectEntityId] ON [CF_Repo_Relationships] ([ObjectEntityId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221018234313_CreatedEntityModels')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20221018234313_CreatedEntityModels', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221115224131_AddeStateToFormDataAndEntityData')
BEGIN
    ALTER TABLE [CF_Repo_FormData] ADD [State] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221115224131_AddeStateToFormDataAndEntityData')
BEGIN
    ALTER TABLE [CF_Repo_Entities] ADD [State] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20221115224131_AddeStateToFormDataAndEntityData')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20221115224131_AddeStateToFormDataAndEntityData', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230109181600_AddTriggerAndWorkflowClasses')
BEGIN
    CREATE TABLE [CF_Repo_Workflows] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_CF_Repo_Workflows] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230109181600_AddTriggerAndWorkflowClasses')
BEGIN
    CREATE TABLE [CF_Repo_Triggers] (
        [Id] uniqueidentifier NOT NULL,
        [Name] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NOT NULL,
        [eTriggerType] int NOT NULL,
        [WorkflowId] uniqueidentifier NULL,
        CONSTRAINT [PK_CF_Repo_Triggers] PRIMARY KEY ([Id]),
        CONSTRAINT [FK_CF_Repo_Triggers_CF_Repo_Workflows_WorkflowId] FOREIGN KEY ([WorkflowId]) REFERENCES [CF_Repo_Workflows] ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230109181600_AddTriggerAndWorkflowClasses')
BEGIN
    CREATE INDEX [IX_CF_Repo_Triggers_WorkflowId] ON [CF_Repo_Triggers] ([WorkflowId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230109181600_AddTriggerAndWorkflowClasses')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230109181600_AddTriggerAndWorkflowClasses', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord')
BEGIN
    ALTER TABLE [CF_Repo_Triggers] DROP CONSTRAINT [FK_CF_Repo_Triggers_CF_Repo_Workflows_WorkflowId];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord')
BEGIN
    DROP INDEX [IX_CF_Repo_Triggers_WorkflowId] ON [CF_Repo_Triggers];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[CF_Repo_Triggers]') AND [c].[name] = N'WorkflowId');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [CF_Repo_Triggers] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [CF_Repo_Triggers] DROP COLUMN [WorkflowId];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord')
BEGIN
    ALTER TABLE [CF_Repo_Workflows] ADD [SerializedWorkflow] nvarchar(max) NOT NULL DEFAULT N'';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230118174901_UpdateRepoDbContextWorkflowToWorkfloDbRecord', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118230649_AddAssociationEntityTemplateAndWorkflowDbRecord')
BEGIN
    ALTER TABLE [CF_Repo_Workflows] ADD [EntityTemplateId] uniqueidentifier NOT NULL DEFAULT '00000000-0000-0000-0000-000000000000';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118230649_AddAssociationEntityTemplateAndWorkflowDbRecord')
BEGIN
    CREATE INDEX [IX_CF_Repo_Workflows_EntityTemplateId] ON [CF_Repo_Workflows] ([EntityTemplateId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118230649_AddAssociationEntityTemplateAndWorkflowDbRecord')
BEGIN
    ALTER TABLE [CF_Repo_Workflows] ADD CONSTRAINT [FK_CF_Repo_Workflows_CF_Repo_EntityTemplates_EntityTemplateId] FOREIGN KEY ([EntityTemplateId]) REFERENCES [CF_Repo_EntityTemplates] ([Id]) ON DELETE CASCADE;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230118230649_AddAssociationEntityTemplateAndWorkflowDbRecord')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230118230649_AddAssociationEntityTemplateAndWorkflowDbRecord', N'6.0.7');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230225024839_RemovedTriggersFromDbContext')
BEGIN
    DROP TABLE [CF_Repo_Recipient];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230225024839_RemovedTriggersFromDbContext')
BEGIN
    DROP TABLE [CF_Repo_Triggers];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230225024839_RemovedTriggersFromDbContext')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230225024839_RemovedTriggersFromDbContext', N'6.0.7');
END;
GO

COMMIT;
GO

