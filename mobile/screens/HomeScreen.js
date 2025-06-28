import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import IssueRing from '../components/IssueRing.js';
import CandidateClip from '../components/CandidateClip.js';
import { fetchIssues, fetchVideosByIssue } from '../services/mockData.js';

const HomeScreen = () => {
  const [issues, setIssues] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const fetchedIssues = await fetchIssues();
        setIssues(fetchedIssues);
        if (fetchedIssues.length > 0) {
          const fetchedVideos = await fetchVideosByIssue(fetchedIssues[0]);
          setVideos(fetchedVideos);
        }
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const { width } = Dimensions.get('window');

  return (
    <View style={[styles.container, { width }]}>
      {/* Issue Rings */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.issueRingContainer}
      >
        {issues.map((issue, idx) => (
          <IssueRing
            key={issue}
            title={issue}
            active={idx === 0}
            onPress={() => {
              setLoading(true);
              fetchVideosByIssue(issue)
                .then(videos => setVideos(videos))
                .catch(error => console.error('Error fetching videos:', error))
                .finally(() => setLoading(false));
            }}
          />
        ))}
      </ScrollView>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView style={styles.candidatesContainer}>
          {videos.map((video) => (
            <CandidateClip
              key={video.id}
              video={video}
              onLike={() => console.log('Liked:', video.title)}
              onDislike={() => console.log('Disliked:', video.title)}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  issueRingContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  candidatesContainer: {
    flex: 1,
    padding: 16,
  },
});

export default HomeScreen;
