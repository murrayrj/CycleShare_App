class RemoveStatusFromBikes < ActiveRecord::Migration
  def change
    remove_column :bikes, :status
  end
end
