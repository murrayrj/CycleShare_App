class AddPostcodeToBikes < ActiveRecord::Migration
  def change
    add_column :bikes, :postcode, :string
  end
end
