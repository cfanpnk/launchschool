def get_file_open_time
  time_before = Time.now
  yield                       
  time_after= Time.now
  puts "It took #{time_after - time_before} seconds."
end

time_it { 
  File.open("access_log") do |log_file|     
    requests = log_file.readlines 
  end
}                   