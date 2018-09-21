IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_Categories] (
        [CategoryID] uniqueidentifier NOT NULL,
        [Category] nvarchar(max) NULL,
        [GroupName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Categories] PRIMARY KEY ([CategoryID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_CentricScores] (
        [CentricScoreID] uniqueidentifier NOT NULL,
        [GroupName] nvarchar(max) NULL,
        [Score] uniqueidentifier NOT NULL,
        [ScoreDesc] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_CentricScores] PRIMARY KEY ([CentricScoreID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_Comments] (
        [MainID] uniqueidentifier NOT NULL,
        [Comment] nvarchar(max) NULL,
        [DateCreated] datetime2 NOT NULL,
        [FullName] nvarchar(max) NULL,
        [GroupName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Comments] PRIMARY KEY ([MainID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_Contacts] (
        [ContactID] uniqueidentifier NOT NULL,
        [ContactName] nvarchar(max) NULL,
        [GroupName] nvarchar(max) NULL,
        [LastName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Contacts] PRIMARY KEY ([ContactID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_Departments] (
        [DepartmentID] uniqueidentifier NOT NULL,
        [Department] nvarchar(max) NULL,
        [GroupName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Departments] PRIMARY KEY ([DepartmentID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_MapCodes] (
        [MapCodeID] uniqueidentifier NOT NULL,
        [GroupName] nvarchar(max) NULL,
        [MapCode] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_MapCodes] PRIMARY KEY ([MapCodeID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_Project] (
        [ProjectID] uniqueidentifier NOT NULL,
        [CustomerCentricScore] uniqueidentifier NOT NULL,
        [CustomerMapCode] nvarchar(max) NULL,
        [DateAdded] datetime2 NOT NULL,
        [DepartmentID] uniqueidentifier NOT NULL,
        [EndDate] datetime2 NOT NULL,
        [EndDateChanged] bit NOT NULL,
        [ProjectCategory] uniqueidentifier NOT NULL,
        [ProjectManager] uniqueidentifier NOT NULL,
        [ProjectNumber] nvarchar(max) NULL,
        [ProjectOverview] nvarchar(max) NULL,
        [ProjectSponsor] uniqueidentifier NOT NULL,
        [ProjectStakeHolder] uniqueidentifier NOT NULL,
        [ProjectTargetDate] datetime2 NOT NULL,
        [StartDate] datetime2 NOT NULL,
        [Status] uniqueidentifier NOT NULL,
        CONSTRAINT [PK_PP_Project] PRIMARY KEY ([ProjectID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    CREATE TABLE [PP_ProjectContacts] (
        [MainID] uniqueidentifier NOT NULL,
        [Contacts] nvarchar(max) NULL,
        [GroupName] nvarchar(max) NULL,
        [Type] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_ProjectContacts] PRIMARY KEY ([MainID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917125726_initialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180917125726_initialCreate', N'2.0.1-rtm-125');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917135017_m001')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_CentricScores') AND [c].[name] = N'Score');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [PP_CentricScores] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [PP_CentricScores] ALTER COLUMN [Score] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180917135017_m001')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180917135017_m001', N'2.0.1-rtm-125');
END;

GO

