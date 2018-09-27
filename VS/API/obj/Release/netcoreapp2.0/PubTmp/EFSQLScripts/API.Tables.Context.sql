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

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    DECLARE @var1 sysname;
    SELECT @var1 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'Status');
    IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var1 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [Status] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    DECLARE @var2 sysname;
    SELECT @var2 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectStakeHolder');
    IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var2 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectStakeHolder] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    DECLARE @var3 sysname;
    SELECT @var3 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectSponsor');
    IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var3 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectSponsor] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    DECLARE @var4 sysname;
    SELECT @var4 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectManager');
    IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var4 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectManager] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    DECLARE @var5 sysname;
    SELECT @var5 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'CustomerMapCode');
    IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var5 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [CustomerMapCode] uniqueidentifier NOT NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m002')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180927171625_m002', N'2.0.1-rtm-125');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    DECLARE @var6 sysname;
    SELECT @var6 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'Status');
    IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var6 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [Status] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    DECLARE @var7 sysname;
    SELECT @var7 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectStakeHolder');
    IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var7 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectStakeHolder] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    DECLARE @var8 sysname;
    SELECT @var8 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectSponsor');
    IF @var8 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var8 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectSponsor] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    DECLARE @var9 sysname;
    SELECT @var9 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'ProjectManager');
    IF @var9 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var9 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [ProjectManager] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    DECLARE @var10 sysname;
    SELECT @var10 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'PP_Project') AND [c].[name] = N'CustomerMapCode');
    IF @var10 IS NOT NULL EXEC(N'ALTER TABLE [PP_Project] DROP CONSTRAINT [' + @var10 + '];');
    ALTER TABLE [PP_Project] ALTER COLUMN [CustomerMapCode] uniqueidentifier NOT NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180927171625_m02')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180927171625_m02', N'2.0.1-rtm-125');
END;

GO

