using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serever_good.Migrations
{
    public partial class Initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeList_CatgoryList_CatgoryId",
                table: "RecipeList");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CatgoryList",
                table: "CatgoryList");

            migrationBuilder.RenameTable(
                name: "CatgoryList",
                newName: "CategoryList");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CategoryList",
                table: "CategoryList",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeList_CategoryList_CatgoryId",
                table: "RecipeList",
                column: "CatgoryId",
                principalTable: "CategoryList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RecipeList_CategoryList_CatgoryId",
                table: "RecipeList");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CategoryList",
                table: "CategoryList");

            migrationBuilder.RenameTable(
                name: "CategoryList",
                newName: "CatgoryList");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CatgoryList",
                table: "CatgoryList",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_RecipeList_CatgoryList_CatgoryId",
                table: "RecipeList",
                column: "CatgoryId",
                principalTable: "CatgoryList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
