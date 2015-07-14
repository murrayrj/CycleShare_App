class BikesController < ApplicationController
  def index
    @bikes = Bike.all
    render json: @bikes
  end

  def create
    bike = Bike.create(description: params[:description], postcode: params[:postcode], status: params[:status])
    render json: bike if bike.save
  end
end
