class DotsController < ApplicationController

  def index
  end

  def search
    title = params[:title]
    title.gsub!(' ', '%20')
    artist_name = params[:artist_name]
    artist_name.gsub!(' ', '%20')
    response = EchoNestSearch::get_echonest_data(title, artist_name)
    # Fix when we get echonest working
    # echonest_id = response.
    # fma_audio = FMASearch::get_fma_url(echonest_id)
    # itunes_audio_url = ItunesSearch::get_itunes_url(artist_name, title)
    respond_to do |format|
      format.html { }
      format.json { render json: { :artist => response[:artist],
                                   :song => response[:song],
                                   :meta_data => response[:meta_data]
                                 }
      }
    end

  end


end
