using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PP_Categories",
                columns: table => new
                {
                    CategoryID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Category = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Categories", x => x.CategoryID);
                });

            migrationBuilder.CreateTable(
                name: "PP_CentricScores",
                columns: table => new
                {
                    CentricScoreID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Score = table.Column<int>(nullable: false),
                    ScoreDesc = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_CentricScores", x => x.CentricScoreID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Comments",
                columns: table => new
                {
                    MainID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Comment = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    FullName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Comments", x => x.MainID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Contacts",
                columns: table => new
                {
                    ContactID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ContactName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Contacts", x => x.ContactID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Departments",
                columns: table => new
                {
                    DepartmentID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Department = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Departments", x => x.DepartmentID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Main",
                columns: table => new
                {
                    MainID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryID = table.Column<int>(nullable: false),
                    CentricScoreID = table.Column<int>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    DateEnded = table.Column<DateTime>(nullable: false),
                    DatePrevious = table.Column<DateTime>(nullable: false),
                    DateStarted = table.Column<DateTime>(nullable: false),
                    DepartmentID = table.Column<int>(nullable: false),
                    MapCode = table.Column<string>(nullable: true),
                    Overview = table.Column<string>(nullable: true),
                    Status = table.Column<string>(nullable: true),
                    TargetDate = table.Column<DateTime>(nullable: false),
                    TaskCompleted = table.Column<int>(nullable: false),
                    TaskInProgress = table.Column<int>(nullable: false),
                    TaskUpcoming = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Main", x => x.MainID);
                });

            migrationBuilder.CreateTable(
                name: "PP_MapCodes",
                columns: table => new
                {
                    MapCodeID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    MapCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_MapCodes", x => x.MapCodeID);
                });

            migrationBuilder.CreateTable(
                name: "PP_ProjectContacts",
                columns: table => new
                {
                    MainID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Contacts = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_ProjectContacts", x => x.MainID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PP_Categories");

            migrationBuilder.DropTable(
                name: "PP_CentricScores");

            migrationBuilder.DropTable(
                name: "PP_Comments");

            migrationBuilder.DropTable(
                name: "PP_Contacts");

            migrationBuilder.DropTable(
                name: "PP_Departments");

            migrationBuilder.DropTable(
                name: "PP_Main");

            migrationBuilder.DropTable(
                name: "PP_MapCodes");

            migrationBuilder.DropTable(
                name: "PP_ProjectContacts");
        }
    }
}
