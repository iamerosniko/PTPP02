using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace API.Migrations
{
    public partial class m008 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProjectCategory",
                table: "PP_Project",
                newName: "ProjectCategoryID");

            migrationBuilder.RenameColumn(
                name: "CustomerMapCode",
                table: "PP_Project",
                newName: "CustomerMapCodeID");

            migrationBuilder.RenameColumn(
                name: "CustomerCentricScore",
                table: "PP_Project",
                newName: "CustomerCentricScoreID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ProjectCategoryID",
                table: "PP_Project",
                newName: "ProjectCategory");

            migrationBuilder.RenameColumn(
                name: "CustomerMapCodeID",
                table: "PP_Project",
                newName: "CustomerMapCode");

            migrationBuilder.RenameColumn(
                name: "CustomerCentricScoreID",
                table: "PP_Project",
                newName: "CustomerCentricScore");
        }
    }
}
