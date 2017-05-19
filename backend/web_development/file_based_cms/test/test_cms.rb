ENV["RACK_ENV"] = "test"

require "minitest/autorun"
require "rack/test"
require "fileutils"

require_relative "../cms"

class CMSTest < Minitest::Test
  include Rack::Test::Methods

  def setup
    FileUtils.mkdir_p(data_path)
  end

  def teardown
    FileUtils.rm_rf(data_path)
  end

  def app
    Sinatra::Application    
  end  

  def create_document(name, content = "")
    File.open(File.join(data_path, name), "w") do |file|
      file.write(content)
    end
  end

  def session
    last_request.env["rack.session"]
  end

  def test_index
    create_document "about.md"
    create_document "changes.txt"
    create_document "history.txt"

    get "/"

    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "about.md"
    assert_includes last_response.body, "changes.txt" 
    assert_includes last_response.body, "history.txt"
  end

  def test_history
    create_document("changes.txt", "1996 - Ruby 1.0 released.")

    get "/changes.txt"
    assert_equal 200, last_response.status
    assert_equal "text/plain", last_response["Content-Type"]
    assert_includes last_response.body, "1996 - Ruby 1.0 released."
  end

  def test_non_exisit_file
    get "/test.txt"
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "test.txt does not exist"
  end

  def test_markdown_file
    create_document("about.md", "#What is Ruby?")
    get "/about.md"
    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "<h1>What is Ruby?</h1>"
  end

  def test_edit_file_page
    create_document("history.txt", "testing data")
    get "/history.txt/edit"

    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]
    assert_includes last_response.body, "<textarea"
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_edit_file
    create_document("hisotry.txt")
    post "/history.txt/edit", content: "new content"

    assert_equal 302, last_response.status

    get last_response["Location"]

    assert_includes last_response.body, "history.txt has been updated"

    get "/history.txt"
    assert_equal 200, last_response.status
    assert_equal "text/plain", last_response["Content-Type"]
    assert_includes last_response.body, "new content"
  end

  def test_new_document_page
    get "/new"

    assert_equal 200, last_response.status
    assert_equal "text/html;charset=utf-8", last_response["Content-Type"]    
    assert_includes last_response.body, "<input"
    assert_includes last_response.body, '<button type="submit"'
  end

  def test_new_document
    post "/new", filename: "test_file.txt"
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "test_file.txt has been created."
  end

  def test_delete_document
    create_document("test_file.txt")
    post "/test_file.txt/delete"
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "test_file.txt has been deleted."
    assert_includes last_response.body, "test_file.txt"
  end

  def test_signin_page
    get "/users/signin"

    assert_equal 200, last_response.status
    assert_includes last_response.body, "<input"
    assert_includes last_response.body, %q(<button type="submit")
  end

  def test_successful_signin
    post "/users/signin", username: "admin", password: "secret"
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "Welcome!"
    assert_includes last_response.body, "Signed in as admin."
    refute_includes last_response.body, "Sign In"
  end

  def test_failed_signin
    post "/users/signin", username: "admin", password: "password"
    assert_equal 422, last_response.status

    assert_includes last_response.body, "Invalid Credential"
    assert_includes last_response.body, 'value="admin"'
  end

  def test_signout
    post "/users/signin", username: "admin", password: "secret"
    get last_response["Location"]
    assert_includes last_response.body, "Welcome"

    post "/users/signout"
    assert_equal 302, last_response.status

    get last_response["Location"]
    assert_includes last_response.body, "You have been signed out." 
    assert_includes last_response.body, '<button type="submit">Sign In</button>'    
  end
end