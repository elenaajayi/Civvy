import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import AskCandidateModal from './AskCandidateModal.js';

const { width } = Dimensions.get('window');

export default function CandidateClip({ video, onLike, onDislike }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    if (onLike) onLike(video);
  };

  const handleDislike = () => {
    if (onDislike) onDislike(video);
  };

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.videoContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF6B6B" />
        ) : (
          <>
            <img
              src={video.videoAsset}
              alt={video.title}
              style={styles.video}
            />
            {isPlaying && (
              <div style={styles.playOverlay}>
                <Text style={styles.playText}>Playing...</Text>
              </div>
            )}
          </>
        )}
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePlayPause} style={styles.button}>
          <Text style={styles.buttonText}>
            {isPlaying ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLike} style={[styles.button, styles.likeButton]}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDislike} style={[styles.button, styles.dislikeButton]}>
          <Text style={styles.buttonText}>Dislike</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowModal(true)} style={styles.button}>
          <Text style={styles.buttonText}>Ask</Text>
        </TouchableOpacity>
      </View>
      <AskCandidateModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        candidateId={video.id}
        candidateName={video.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  playOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  likeButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.3)',
    padding: 8,
    borderRadius: 30,
  },
  dislikeButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    padding: 8,
    borderRadius: 30,
  },
  askButton: {
    backgroundColor: 'rgba(0, 0, 255, 0.3)',
    padding: 8,
    borderRadius: 30,
  },
  askButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CandidateClip;
