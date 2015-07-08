class User < ActiveRecord::Base
  has_many :bikes_as_owner, class_name: "Bike", foreign_key: "owner_id"
  has_many :bikes_as_renter, class_name: "Bike", foreign_key: "renter_id"
end
