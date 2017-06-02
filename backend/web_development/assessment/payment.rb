require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

configure do
  enable :sessions
  set :session_secret, 'secret'
end

def validation_errors
  @errors = []
  @errors << "First Name is missing. " if @first_name.empty?
  @errors <<  "Last Name is missing. " if @last_name.empty?
  @errors << "Card Number is missing. " if @card_number.empty?
  @errors << "Expiration date is missing. " if @exp_date.empty?
  @errors << "CCV is missing. " if @ccv.empty?
  @errors << "The card number must be 16 charaters long." if @card_number.size != 16
  @errors
end

def is_input_valid?
  validation_errors.none?
end

def format_card_number(card_number)
  "****-****-****-" + card_number[-4, 4]
end

def reset
  session[:payments] = []
end

get "/" do
  reset
end

get "/payments/create" do
  erb :create
end

post "/payments/create" do
  @first_name = params[:first_name].to_s
  @last_name = params[:last_name].to_s
  @card_number = params[:card_number].to_s
  @exp_date = params[:exp_date].to_s
  @ccv = params[:ccv].to_s
  
  if is_input_valid?
    payment = {}
    payment[:name] = @first_name + ' ' + @last_name
    payment[:created] = Time.new
    payment[:card_number] = format_card_number(@card_number)
    payment[:exp_date] = @exp_date
    session[:payments] << payment
    session[:message] = "Thank you for your payment."
    redirect "/payments"
  else
    session[:message] = @errors.join(" ")
    status 422
    erb :create
  end
end

get "/payments" do
  erb :payments
end
