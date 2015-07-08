class CreateBikes < ActiveRecord::Migration
  def change
    create_table :bikes do |t|

      t.timestamps null: false
    end
  end
end
