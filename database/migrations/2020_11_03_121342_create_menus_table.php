<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;
class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->integer('parent_id');
            $table->string('path')->nullable();
            $table->string('icon');
            $table->tinyInteger('isblocked')->default('0');
            $table->integer('order')->default(0);
            $table->timestamps();
        });

        DB::table('menus')->insert([
            "title"=>"Dashboard",
            "parent_id"=>0,
            "path"=>"/",
            "icon"=>"mdi-view-dashboard-variant",
            "isblocked"=>0,
            "order"=>0,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Welcome",
            "parent_id"=>0,
            "path"=>"welcome",
            "icon"=>"mdi-account-arrow-right-outline",
            "isblocked"=>0,
            "order"=>1,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"About",
            "parent_id"=>0,
            "path"=>"about",
            "icon"=>"mdi-access-point-minus",
            "isblocked"=>0,
            "order"=>2,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Reports",
            "parent_id"=>0,
            "path"=>"reports",
            "icon"=>"mdi-file-table-box-multiple-outline",
            "isblocked"=>0,
            "order"=>3,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Nested",
            "parent_id"=>0,
            "path"=>"nested",
            "icon"=>"mdi-hexagon-multiple",
            "isblocked"=>0,
            "order"=>4,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Students",
            "parent_id"=>5,
            "path"=>"students",
            "icon"=>"",
            "isblocked"=>0,
            "order"=>0,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Child 1",
            "parent_id"=>5,
            "path"=>"child_1",
            "icon"=>"mdi-access-point",
            "isblocked"=>0,
            "order"=>1,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Child 2",
            "parent_id"=>5,
            "path"=>"child_2",
            "icon"=>"mdi-abugida-devanagari",
            "isblocked"=>0,
            "order"=>2,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
        DB::table('menus')->insert([
            "title"=>"Child 3",
            "parent_id"=>5,
            "path"=>"child_3",
            "icon"=>"mdi-account-question",
            "isblocked"=>0,
            "order"=>3,
            "created_at"=> Carbon::now(),
            "updated_at"=> Carbon::now()
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
