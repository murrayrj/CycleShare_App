class Bike < ActiveRecord::Base
  enum status: [ :available, :rented, :unavailable ]
  belongs_to :owner, class_name: "User", foreign_key: "owner_id"
  belongs_to :renter, class_name: "User", foreign_key: "renter_id"
end
