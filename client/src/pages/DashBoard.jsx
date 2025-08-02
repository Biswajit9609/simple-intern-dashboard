"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import { TrendingUp, Copy, Award, FileText, Linkedin, CheckCircle, Lock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


function Dashboard() {
  const [intern, setIntern] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((response) => {
        setIntern(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
        setLoading(false)
      })
  }, [])

  const copyReferralCode = () => {
    if (intern?.referralCode) {
      navigator.clipboard.writeText(intern.referralCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const rewards = [
    {
      amount: 5000,
      title: "Certificate of Appreciation",
      icon: Award,
      unlocked: intern?.donationsRaised >= 5000,
    },
    {
      amount: 15000,
      title: "Letter of Recommendation (LOR)",
      icon: FileText,
      unlocked: intern?.donationsRaised >= 15000,
    },
    {
      amount: 30000,
      title: "LinkedIn Endorsement",
      icon: Linkedin,
      unlocked: intern?.donationsRaised >= 30000,
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading Dashboard...</p>
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
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Welcome back, {intern.name}!
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Track your fundraising progress and unlock exclusive rewards as you make a difference.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-gray-300 text-sm font-medium uppercase tracking-wide">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                Total Donations Raised
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-emerald-400">₹{intern.donationsRaised.toLocaleString()}</span>
                <Badge variant="secondary" className="bg-emerald-400/10 text-emerald-400 border-emerald-400/20">
                  +12% this month
                </Badge>
              </div>
              <div className="mt-4 bg-gray-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((intern.donationsRaised / 30000) * 100, 100)}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {Math.min((intern.donationsRaised / 30000) * 100, 100).toFixed(1)}% towards next milestone
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-gray-300 text-sm font-medium uppercase tracking-wide">
                <Copy className="h-5 w-5 text-cyan-400" />
                Your Referral Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="bg-gray-800 border border-gray-600 rounded-lg px-6 py-4 flex-1 mr-4">
                  <span className="text-3xl font-mono font-bold text-cyan-400 tracking-wider">
                    {intern.referralCode}
                  </span>
                </div>
                <Button
                  onClick={copyReferralCode}
                  variant="outline"
                  size="lg"
                  className="bg-cyan-400/10 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/50"
                >
                  {copied ? <CheckCircle className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-3">Share this code to earn referral bonuses</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold">
              <Award className="h-7 w-7 text-yellow-400" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Rewards & Achievements
              </span>
            </CardTitle>
            <p className="text-gray-400">Unlock exclusive rewards as you reach fundraising milestones</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {rewards.map((reward, index) => {
                const Icon = reward.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      reward.unlocked
                        ? "bg-emerald-400/5 border-emerald-400/30 hover:bg-emerald-400/10"
                        : "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                    }`}
                  >
                    <div className={`p-3 rounded-full ${reward.unlocked ? "bg-emerald-400/20" : "bg-gray-700"}`}>
                      {reward.unlocked ? (
                        <CheckCircle className="h-6 w-6 text-emerald-400" />
                      ) : (
                        <Lock className="h-6 w-6 text-gray-500" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Icon className={`h-5 w-5 ${reward.unlocked ? "text-emerald-400" : "text-gray-500"}`} />
                        <span className={`font-semibold ${reward.unlocked ? "text-white" : "text-gray-400"}`}>
                          {reward.title}
                        </span>
                      </div>
                      <p className={`text-sm ${reward.unlocked ? "text-emerald-400" : "text-gray-500"}`}>
                        ₹{reward.amount.toLocaleString()} milestone
                      </p>
                    </div>

                    <Badge
                      variant={reward.unlocked ? "default" : "secondary"}
                      className={
                        reward.unlocked
                          ? "bg-emerald-400/20 text-emerald-400 border-emerald-400/30"
                          : "bg-gray-700 text-gray-400 border-gray-600"
                      }
                    >
                      {reward.unlocked ? "Unlocked" : "Locked"}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
