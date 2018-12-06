using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace API.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PP_Categories",
                columns: table => new
                {
                    CategoryID = table.Column<Guid>(nullable: false),
                    Category = table.Column<string>(nullable: true),
                    GroupName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Categories", x => x.CategoryID);
                });

            migrationBuilder.CreateTable(
                name: "PP_CentricScores",
                columns: table => new
                {
                    CentricScoreID = table.Column<Guid>(nullable: false),
                    GroupName = table.Column<string>(nullable: true),
                    Score = table.Column<Guid>(nullable: false),
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
                    MainID = table.Column<Guid>(nullable: false),
                    Comment = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    FullName = table.Column<string>(nullable: true),
                    GroupName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Comments", x => x.MainID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Contacts",
                columns: table => new
                {
                    ContactID = table.Column<Guid>(nullable: false),
                    ContactName = table.Column<string>(nullable: true),
                    GroupName = table.Column<string>(nullable: true),
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
                    DepartmentID = table.Column<Guid>(nullable: false),
                    Department = table.Column<string>(nullable: true),
                    GroupName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Departments", x => x.DepartmentID);
                });

            migrationBuilder.CreateTable(
                name: "PP_MapCodes",
                columns: table => new
                {
                    MapCodeID = table.Column<Guid>(nullable: false),
                    GroupName = table.Column<string>(nullable: true),
                    MapCode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_MapCodes", x => x.MapCodeID);
                });

            migrationBuilder.CreateTable(
                name: "PP_Project",
                columns: table => new
                {
                    ProjectID = table.Column<Guid>(nullable: false),
                    CustomerCentricScore = table.Column<Guid>(nullable: false),
                    CustomerMapCode = table.Column<string>(nullable: true),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    DepartmentID = table.Column<Guid>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    EndDateChanged = table.Column<bool>(nullable: false),
                    ProjectCategory = table.Column<Guid>(nullable: false),
                    ProjectManager = table.Column<Guid>(nullable: false),
                    ProjectNumber = table.Column<string>(nullable: true),
                    ProjectOverview = table.Column<string>(nullable: true),
                    ProjectSponsor = table.Column<Guid>(nullable: false),
                    ProjectStakeHolder = table.Column<Guid>(nullable: false),
                    ProjectTargetDate = table.Column<DateTime>(nullable: false),
                    StartDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PP_Project", x => x.ProjectID);
                });

            migrationBuilder.CreateTable(
                name: "PP_ProjectContacts",
                columns: table => new
                {
                    MainID = table.Column<Guid>(nullable: false),
                    Contacts = table.Column<string>(nullable: true),
                    GroupName = table.Column<string>(nullable: true),
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
                name: "PP_MapCodes");

            migrationBuilder.DropTable(
                name: "PP_Project");

            migrationBuilder.DropTable(
                name: "PP_ProjectContacts");
        }
    }
}
