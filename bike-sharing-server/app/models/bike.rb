class Bike < ActiveRecord::Base
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
  belongs_to :renter, class_name: "User", foreign_key: "renter_id"
end
