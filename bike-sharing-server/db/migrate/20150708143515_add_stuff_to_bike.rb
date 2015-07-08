class AddStuffToBike < ActiveRecord::Migration
  def change
    add_column :bikes, :description, :text
    add_column :bikes, :photo, :text
    add_column :bikes, :status, :string
    add_column :bikes, :owner_id, :integer
    add_column :bikes, :renter_id, :integer
  end
end
