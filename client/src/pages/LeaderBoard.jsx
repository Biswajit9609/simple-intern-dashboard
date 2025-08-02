"use client"

import { useState, useEffect } from "react"
import { Trophy, Medal, Award, TrendingUp, Crown, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import axios from "axios"


function Leaderboard() {
  const [leaders, setLeaders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://simple-intern-dashboard.onrender.com/api/leaderboard")
      .then((response) => {
        setLeaders(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching leaderboard:", error)
        setLoading(false)
      })
  }, [])

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-400" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-300" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return <span className="text-2xl font-bold text-gray-400">#{rank}</span>
    }
  }

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1:
        return (
          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold">🥇 Champion</Badge>
        )
      case 2:
        return <Badge className="bg-gradient-to-r from-gray-300 to-gray-400 text-black font-bold">🥈 Runner-up</Badge>
      case 3:
        return (
          <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold">🥉 Third Place</Badge>
        )
      default:
        return null
    }
  }

  const getRowStyle = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border-yellow-400/30 hover:from-yellow-400/20 hover:to-orange-400/20"
      case 2:
        return "bg-gradient-to-r from-gray-300/10 to-gray-400/10 border-gray-300/30 hover:from-gray-300/20 hover:to-gray-400/20"
      case 3:
        return "bg-gradient-to-r from-amber-600/10 to-yellow-600/10 border-amber-600/30 hover:from-amber-600/20 hover:to-yellow-600/20"
      default:
        return "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading Leaderboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {" "}
      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-12 w-12 text-yellow-400" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Leaderboard
              </h1>
            </div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Celebrating our top fundraising champions who are making a real difference!
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        {leaders.length >= 3 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
              <Star className="h-6 w-6 text-yellow-400" />
              Top Performers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-300/10 to-gray-400/10 border-gray-300/30 order-2 md:order-1">
                <CardContent className="text-center p-6">
                  <div className="mb-4">
                    <Medal className="h-16 w-16 text-gray-300 mx-auto mb-2" />
                    <Badge className="bg-gradient-to-r from-gray-300 to-gray-400 text-black font-bold">
                      🥈 2nd Place
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{leaders[1]?.name}</h3>
                  <p className="text-3xl font-bold text-gray-300">₹{leaders[1]?.donationsRaised.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border-yellow-400/30 order-1 md:order-2 transform md:scale-110">
                <CardContent className="text-center p-6">
                  <div className="mb-4">
                    <Crown className="h-20 w-20 text-yellow-400 mx-auto mb-2" />
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-lg px-4 py-2">
                      👑 Champion
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leaders[0]?.name}</h3>
                  <p className="text-4xl font-bold text-yellow-400">₹{leaders[0]?.donationsRaised.toLocaleString()}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-600/10 to-yellow-600/10 border-amber-600/30 order-3">
                <CardContent className="text-center p-6">
                  <div className="mb-4">
                    <Award className="h-16 w-16 text-amber-600 mx-auto mb-2" />
                    <Badge className="bg-gradient-to-r from-amber-600 to-yellow-600 text-black font-bold">
                      🥉 3rd Place
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{leaders[2]?.name}</h3>
                  <p className="text-3xl font-bold text-amber-600">₹{leaders[2]?.donationsRaised.toLocaleString()}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold">
              <TrendingUp className="h-7 w-7 text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Complete Rankings
              </span>
            </CardTitle>
            <p className="text-gray-400">Full leaderboard showing all participants</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="space-y-3">
                {leaders.map((leader, index) => {
                  const rank = index + 1
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${getRowStyle(
                        rank,
                      )}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800">
                          {getRankIcon(rank)}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-lg font-semibold text-white">{leader.name}</h3>
                            {getRankBadge(rank)}
                          </div>
                          <p className="text-sm text-gray-400">Rank #{rank}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-2xl font-bold text-emerald-400">
                          ₹{leader.donationsRaised.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-400">Total Raised</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {leaders.length === 0 && (
              <div className="text-center py-12">
                <Trophy className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No leaderboard data available yet.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">
                ₹{leaders.reduce((sum, leader) => sum + leader.donationsRaised, 0).toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">Total Raised</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Star className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{leaders.length}</p>
              <p className="text-sm text-gray-400">Active Fundraisers</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">
                ₹
                {leaders.length > 0
                  ? Math.round(
                      leaders.reduce((sum, leader) => sum + leader.donationsRaised, 0) / leaders.length,
                    ).toLocaleString()
                  : 0}
              </p>
              <p className="text-sm text-gray-400">Average Raised</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
