class AddStatusToBikes < ActiveRecord::Migration
  def change
    add_column :bikes, :status, :integer
  end
end
