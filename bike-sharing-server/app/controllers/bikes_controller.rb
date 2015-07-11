class BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end
end
