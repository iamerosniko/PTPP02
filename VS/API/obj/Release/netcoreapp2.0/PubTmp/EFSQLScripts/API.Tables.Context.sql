IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_Categories] (
        [CategoryID] int NOT NULL IDENTITY,
        [Category] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Categories] PRIMARY KEY ([CategoryID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_CentricScores] (
        [CentricScoreID] int NOT NULL IDENTITY,
        [Score] int NOT NULL,
        [ScoreDesc] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_CentricScores] PRIMARY KEY ([CentricScoreID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_Comments] (
        [MainID] int NOT NULL IDENTITY,
        [Comment] nvarchar(max) NULL,
        [DateCreated] datetime2 NOT NULL,
        [FullName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Comments] PRIMARY KEY ([MainID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_Contacts] (
        [ContactID] int NOT NULL IDENTITY,
        [ContactName] nvarchar(max) NULL,
        [LastName] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Contacts] PRIMARY KEY ([ContactID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_Departments] (
        [DepartmentID] int NOT NULL IDENTITY,
        [Department] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_Departments] PRIMARY KEY ([DepartmentID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_Main] (
        [MainID] int NOT NULL IDENTITY,
        [CategoryID] int NOT NULL,
        [CentricScoreID] int NOT NULL,
        [DateAdded] datetime2 NOT NULL,
        [DateEnded] datetime2 NOT NULL,
        [DatePrevious] datetime2 NOT NULL,
        [DateStarted] datetime2 NOT NULL,
        [DepartmentID] int NOT NULL,
        [MapCode] nvarchar(max) NULL,
        [Overview] nvarchar(max) NULL,
        [Status] nvarchar(max) NULL,
        [TargetDate] datetime2 NOT NULL,
        [TaskCompleted] int NOT NULL,
        [TaskInProgress] int NOT NULL,
        [TaskUpcoming] int NOT NULL,
        CONSTRAINT [PK_PP_Main] PRIMARY KEY ([MainID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_MapCodes] (
        [MapCodeID] int NOT NULL IDENTITY,
        [MapCode] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_MapCodes] PRIMARY KEY ([MapCodeID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    CREATE TABLE [PP_ProjectContacts] (
        [MainID] int NOT NULL IDENTITY,
        [Contacts] nvarchar(max) NULL,
        [Type] nvarchar(max) NULL,
        CONSTRAINT [PK_PP_ProjectContacts] PRIMARY KEY ([MainID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180530191529_InitialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180530191529_InitialCreate', N'2.0.1-rtm-125');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_ProjectContacts] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_MapCodes] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_Main] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_Departments] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_Contacts] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_Comments] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_CentricScores] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    ALTER TABLE [PP_Categories] ADD [GroupName] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20180604111245_m001')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20180604111245_m001', N'2.0.1-rtm-125');
END;

GO

